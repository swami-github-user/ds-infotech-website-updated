"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, LogOut, Lock, PlayCircle, Loader2 } from "lucide-react";

import {
  clearSession,
  completeLoginFromUrl,
  getSession,
  isPortalConfigured,
  logout,
  portalConfig,
  startLogin,
  type PortalSession,
} from "@/lib/portalAuth";

interface Session {
  title: string;
  file: string;
  sizeBytes: number;
  url: string;
}

interface Course {
  id: string;
  title: string;
  sessions: Session[];
}

type Status = "checking" | "signed-out" | "loading" | "ready" | "error";

function formatSize(bytes: number) {
  if (!bytes) return "";
  const gb = bytes / 1024 ** 3;
  return gb >= 1 ? `${gb.toFixed(1)} GB` : `${Math.round(bytes / 1024 ** 2)} MB`;
}

export default function PortalClient() {
  const [status, setStatus] = useState<Status>("checking");
  const [session, setSession] = useState<PortalSession | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isPortalConfigured) return;

    let cancelled = false;

    (async () => {
      try {
        const active = (await completeLoginFromUrl()) || getSession();
        if (cancelled) return;

        if (!active) {
          setStatus("signed-out");
          return;
        }

        setSession(active);
        setStatus("loading");

        const res = await fetch(portalConfig.api, {
          headers: { Authorization: `Bearer ${active.accessToken}` },
        });

        if (res.status === 401) {
          clearSession();
          if (!cancelled) setStatus("signed-out");
          return;
        }

        const data = await res.json();
        if (!res.ok || !data.success) throw new Error(data.message);

        if (!cancelled) {
          setCourses(data.courses);
          setStatus("ready");
        }
      } catch (err) {
        if (!cancelled) {
          setMessage(err instanceof Error && err.message ? err.message : "Something went wrong.");
          setStatus("error");
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const totalSessions = courses.reduce((n, c) => n + c.sessions.length, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold">
            DS <span className="text-orange-500">Infotech</span>
          </Link>

          {session && (
            <div className="flex items-center gap-4 text-sm">
              <span className="hidden text-slate-500 sm:inline">{session.email}</span>
              <button
                onClick={logout}
                className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 font-medium text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
              >
                <LogOut size={16} />
                Sign out
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-14">
        {!isPortalConfigured && (
          <Notice title="Learner portal coming soon">
            The learner portal is being set up. Please check back shortly.
          </Notice>
        )}

        {isPortalConfigured && (status === "checking" || status === "loading") && (
          <div className="flex items-center justify-center gap-3 py-24 text-slate-500">
            <Loader2 className="animate-spin" size={22} />
            {status === "checking" ? "Checking your session…" : "Loading your recordings…"}
          </div>
        )}

        {isPortalConfigured && status === "signed-out" && (
          <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
              <Lock size={26} />
            </span>
            <h1 className="mt-6 text-2xl font-bold text-slate-900">Learner Portal</h1>
            <p className="mt-3 leading-7 text-slate-600">
              Sign in with the email and password from your course invitation to
              download your session recordings.
            </p>
            <button
              onClick={() => startLogin()}
              className="mt-8 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Sign in
            </button>
            <p className="mt-6 text-sm text-slate-500">
              Forgot your password? Use the &ldquo;Forgot your password&rdquo; link on the sign-in page.
            </p>
          </div>
        )}

        {isPortalConfigured && status === "error" && (
          <Notice title="We couldn't load your recordings">
            {message}{" "}
            <button onClick={() => window.location.reload()} className="font-semibold text-orange-600 underline">
              Try again
            </button>
          </Notice>
        )}

        {status === "ready" && (
          <>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Your Recordings</h1>
              <p className="mt-2 text-slate-600">
                {totalSessions > 0
                  ? "Download links are valid for 6 hours. Reload this page for fresh links."
                  : ""}
              </p>
            </div>

            {courses.length === 0 && (
              <Notice title="No courses on your account yet">
                Your access may still be being set up. If this continues, reply to
                your invitation email and we will sort it out.
              </Notice>
            )}

            {courses.map((course) => (
              <section key={course.id} className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-xl font-bold text-slate-900">{course.title}</h2>
                  <span className="text-sm text-slate-500">
                    {course.sessions.length} session{course.sessions.length === 1 ? "" : "s"}
                  </span>
                </div>

                {course.sessions.length === 0 ? (
                  <p className="mt-6 text-slate-600">Recordings for this course will appear here soon.</p>
                ) : (
                  <ol className="mt-6 divide-y divide-slate-100">
                    {course.sessions.map((s, i) => (
                      <li key={s.file} className="flex items-center gap-4 py-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                          <PlayCircle size={20} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-slate-900">
                            <span className="mr-2 text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                            {s.title}
                          </p>
                          {s.sizeBytes > 0 && <p className="text-sm text-slate-500">{formatSize(s.sizeBytes)}</p>}
                        </div>
                        <a
                          href={s.url}
                          aria-label={`Download ${s.title}`}
                          className="flex shrink-0 items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                        >
                          <Download size={16} />
                          <span className="hidden sm:inline">Download</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                )}
              </section>
            ))}

            <p className="mt-10 text-center text-sm text-slate-500">
              Recordings are licensed for your personal use only. Please do not share them or your login.
            </p>
          </>
        )}
      </main>
    </div>
  );
}

function Notice({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-6 max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{children}</p>
    </div>
  );
}
