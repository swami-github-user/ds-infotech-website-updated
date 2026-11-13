/**
 * Minimal Cognito hosted-login client for the learner portal.
 * Authorization code flow with PKCE; no client secret, no extra libraries.
 * Tokens live in sessionStorage, so closing the tab signs the learner out.
 */

export const portalConfig = {
  domain: (process.env.NEXT_PUBLIC_COGNITO_DOMAIN || "").replace(/\/$/, ""),
  clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || "",
  api: process.env.NEXT_PUBLIC_PORTAL_API || "",
};

export const isPortalConfigured = Boolean(
  portalConfig.domain && portalConfig.clientId && portalConfig.api
);

const TOKEN_KEY = "dsi-portal-tokens";
const VERIFIER_KEY = "dsi-portal-verifier";
const STATE_KEY = "dsi-portal-state";

export interface PortalSession {
  accessToken: string;
  email: string;
  expiresAt: number;
}

/**
 * The live site serves /portal/index.html (CloudFront does not resolve
 * folder URLs), while `next dev` serves /portal/. Use whichever we are on;
 * both are registered as callback URLs in Cognito.
 */
function redirectUri() {
  return `${window.location.origin}${window.location.pathname}`;
}

function base64Url(bytes: ArrayBuffer | Uint8Array) {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let str = "";
  arr.forEach((b) => (str += String.fromCharCode(b)));
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function randomString(length = 64) {
  return base64Url(crypto.getRandomValues(new Uint8Array(length)));
}

function decodeJwt(token: string): Record<string, unknown> {
  const payload = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
  const bytes = Uint8Array.from(atob(payload), (c) => c.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function store(key: string, value: string | null) {
  try {
    if (value === null) sessionStorage.removeItem(key);
    else sessionStorage.setItem(key, value);
  } catch {
    /* storage unavailable: the learner simply signs in again */
  }
}

function read(key: string) {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

export async function startLogin() {
  const verifier = randomString();
  const state = randomString(16);
  const challenge = base64Url(
    await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier))
  );

  store(VERIFIER_KEY, verifier);
  store(STATE_KEY, state);

  const params = new URLSearchParams({
    response_type: "code",
    client_id: portalConfig.clientId,
    redirect_uri: redirectUri(),
    scope: "openid email",
    code_challenge_method: "S256",
    code_challenge: challenge,
    state,
  });

  window.location.assign(`${portalConfig.domain}/oauth2/authorize?${params}`);
}

/** Completes the redirect back from the hosted login, if there is one. */
export async function completeLoginFromUrl(): Promise<PortalSession | null> {
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code) return null;

  // Remove the code from the address bar whatever happens next
  window.history.replaceState({}, "", url.pathname);

  const verifier = read(VERIFIER_KEY);
  if (!verifier || state !== read(STATE_KEY)) {
    throw new Error("Sign-in could not be verified. Please try again.");
  }

  const res = await fetch(`${portalConfig.domain}/oauth2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: portalConfig.clientId,
      code,
      redirect_uri: redirectUri(),
      code_verifier: verifier,
    }),
  });

  store(VERIFIER_KEY, null);
  store(STATE_KEY, null);

  if (!res.ok) throw new Error("Sign-in failed. Please try again.");

  const tokens = await res.json();
  const idClaims = decodeJwt(tokens.id_token);

  const session: PortalSession = {
    accessToken: tokens.access_token,
    email: String(idClaims.email || ""),
    expiresAt: Date.now() + Number(tokens.expires_in || 3600) * 1000,
  };

  store(TOKEN_KEY, JSON.stringify(session));
  return session;
}

export function getSession(): PortalSession | null {
  const raw = read(TOKEN_KEY);
  if (!raw) return null;
  try {
    const session = JSON.parse(raw) as PortalSession;
    if (session.expiresAt - 60_000 < Date.now()) {
      store(TOKEN_KEY, null);
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function clearSession() {
  store(TOKEN_KEY, null);
}

export function logout() {
  clearSession();
  const params = new URLSearchParams({
    client_id: portalConfig.clientId,
    logout_uri: redirectUri(),
  });
  window.location.assign(`${portalConfig.domain}/logout?${params}`);
}
