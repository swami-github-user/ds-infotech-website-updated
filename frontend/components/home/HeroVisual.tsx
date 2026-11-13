import {
  Sparkles,
  Bot,
  GitBranchPlus,
  Boxes,
  Building2,
  BrainCircuit,
  BookOpen,
  FlaskConical,
  Rocket,
  type LucideIcon,
} from "lucide-react";

interface Module {
  title: string;
  tags: string[];
  icon: LucideIcon;
  x: number; // card center, % of panel width
  y: number; // card center, % of panel height
}

const modules: Module[] = [
  { title: "Generative AI", tags: ["Bedrock", "RAG"], icon: Sparkles, x: 25, y: 15 },
  { title: "Agentic AI", tags: ["Agents", "AgentCore"], icon: Bot, x: 75, y: 15 },
  { title: "DevOps", tags: ["CI/CD", "IaC"], icon: GitBranchPlus, x: 17, y: 50 },
  { title: "ML & MLOps", tags: ["SageMaker", "Pipelines"], icon: BrainCircuit, x: 83, y: 50 },
  { title: "Containers", tags: ["Docker", "EKS"], icon: Boxes, x: 25, y: 85 },
  { title: "Architecture", tags: ["VPC", "Resilience"], icon: Building2, x: 75, y: 85 },
];

const steps: { label: string; icon: LucideIcon }[] = [
  { label: "Learn", icon: BookOpen },
  { label: "Practice", icon: FlaskConical },
  { label: "Apply", icon: Rocket },
];

/* Curved connector from the hub (50,50) to a module, in a 100x100 viewBox */
function connector(x: number, y: number) {
  const cx = (50 + x) / 2;
  const cy = y === 50 ? 50 : (50 + y) / 2 + (y < 50 ? 6 : -6);
  return `M50 50 Q ${cx} ${cy} ${x} ${y}`;
}

export default function HeroVisual() {
  return (
    <div
      className="hero-visual relative aspect-square w-full max-w-[640px] overflow-hidden rounded-[2rem] shadow-2xl"
      role="img"
      aria-label="DS Infotech learning hub connecting Generative AI, Agentic AI, DevOps, ML and MLOps, Containers and Cloud Architecture programs"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#101a33] to-[#0b1220]" />
      <div className="hero-visual-grid absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Connectors */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fb923c" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {modules.map((m) => (
          <g key={m.title}>
            <path
              d={connector(m.x, m.y)}
              fill="none"
              stroke="#f97316"
              strokeOpacity="0.15"
              strokeWidth="1.6"
              vectorEffect="non-scaling-stroke"
            />
            <path
              className="hero-visual-flow"
              d={connector(m.x, m.y)}
              fill="none"
              stroke="url(#hv-line)"
              strokeWidth="2"
              strokeDasharray="4 6"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        ))}
      </svg>

      {/* Hub */}
      <div className="absolute left-1/2 top-1/2 flex h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="hero-visual-ring absolute inset-0 rounded-full border border-orange-400/40" />
        <div className="absolute inset-[9%] rounded-full border border-dashed border-orange-300/30" />
        <div className="relative flex w-[86%] flex-col items-center rounded-2xl border border-orange-400/50 bg-[#0f1a33]/90 px-3 py-4 text-center shadow-[0_0_40px_rgba(249,115,22,0.35)] backdrop-blur">
          <span className="text-xl font-bold leading-tight text-white">
            DS <span className="text-orange-400">Infotech</span>
          </span>
          <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-300">
            Learning Hub
          </span>
          <div className="mt-3 flex gap-2">
            {steps.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="flex flex-col items-center gap-1 rounded-lg bg-white/5 px-2 py-1.5 text-[0.6rem] font-medium text-slate-200"
              >
                <Icon size={14} className="text-orange-400" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modules */}
      {modules.map((m, i) => {
        const Icon = m.icon;
        return (
          <div
            key={m.title}
            className="hero-visual-card absolute w-[30%] -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${m.x}%`,
              top: `${m.y}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-lg backdrop-blur-md transition hover:border-orange-400/60">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-md">
                  <Icon size={17} />
                </span>
                <span className="text-sm font-semibold leading-tight text-white">
                  {m.title}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {m.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-orange-500/15 px-1.5 py-0.5 text-[0.6rem] font-medium text-orange-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
