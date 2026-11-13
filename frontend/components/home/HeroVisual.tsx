"use client";

import { useRef } from "react";
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
  { title: "Generative AI", tags: ["Bedrock", "RAG"], icon: Sparkles, x: 23, y: 14 },
  { title: "Agentic AI", tags: ["Agents", "AgentCore"], icon: Bot, x: 77, y: 14 },
  { title: "DevOps", tags: ["CI/CD", "IaC"], icon: GitBranchPlus, x: 17, y: 45 },
  { title: "ML & MLOps", tags: ["SageMaker", "Pipelines"], icon: BrainCircuit, x: 83, y: 45 },
  { title: "Containers", tags: ["Docker", "EKS"], icon: Boxes, x: 23, y: 83 },
  { title: "Architecture", tags: ["VPC", "Resilience"], icon: Building2, x: 77, y: 83 },
];

const steps: { label: string; icon: LucideIcon }[] = [
  { label: "Learn", icon: BookOpen },
  { label: "Practice", icon: FlaskConical },
  { label: "Apply", icon: Rocket },
];

/* Pedestal base point and card "floor" points, in a 100x100 viewBox */
const HUB = { x: 50, y: 68 };
const floorPoint = (m: Module) => ({ x: m.x, y: m.y + 9 });

function connector(m: Module) {
  const p = floorPoint(m);
  const cx = (HUB.x + p.x) / 2;
  const cy = Math.max(HUB.y, p.y) + 6;
  return `M${HUB.x} ${HUB.y} Q ${cx} ${cy} ${p.x} ${p.y}`;
}

/* One cylinder tier of the pedestal */
function Tier({ cy, rx, ry, h, glow }: { cy: number; rx: number; ry: number; h: number; glow: number }) {
  return (
    <g>
      <ellipse cx="50" cy={cy + h} rx={rx} ry={ry} fill="url(#hv-side)" />
      <rect x={50 - rx} y={cy} width={rx * 2} height={h} fill="url(#hv-side)" />
      <ellipse cx="50" cy={cy} rx={rx} ry={ry} fill="url(#hv-top)" />
      <ellipse
        cx="50"
        cy={cy}
        rx={rx}
        ry={ry}
        fill="none"
        stroke="#fb923c"
        strokeOpacity={glow}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <ellipse
        cx="50"
        cy={cy + h}
        rx={rx}
        ry={ry}
        fill="none"
        stroke="#f97316"
        strokeOpacity={glow * 0.6}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </g>
  );
}

export default function HeroVisual() {
  const sceneRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const scene = sceneRef.current;
    if (!scene) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    scene.style.transform = `rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 9).toFixed(2)}deg)`;
  };

  const handleLeave = () => {
    if (sceneRef.current) sceneRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      className="hero-visual relative aspect-square w-full max-w-[640px] overflow-hidden rounded-[2rem] shadow-2xl"
      style={{ perspective: "1400px" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      role="img"
      aria-label="DS Infotech learning hub connecting Generative AI, Agentic AI, DevOps, ML and MLOps, Containers and Cloud Architecture programs"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1022] via-[#0f1a35] to-[#0a1022]" />
      <div className="absolute left-1/2 top-[58%] h-[75%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Perspective floor grid */}
      <div className="absolute inset-x-[-30%] bottom-[-8%] h-[70%] [transform:perspective(500px)_rotateX(62deg)] [transform-origin:bottom]">
        <div className="hero-visual-grid h-full w-full" />
      </div>

      <div
        ref={sceneRef}
        className="hero-visual-scene absolute inset-0"
      >
        {/* Floor layer: rings, connectors, card shadows, pedestal */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hv-side" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0b1328" />
              <stop offset="45%" stopColor="#24365e" />
              <stop offset="100%" stopColor="#0b1328" />
            </linearGradient>
            <radialGradient id="hv-top" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#2b3f6b" />
              <stop offset="100%" stopColor="#131f3d" />
            </radialGradient>
            <linearGradient id="hv-beam" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="hv-shadow">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#f97316" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Floor rings around the pedestal */}
          <ellipse cx="50" cy={HUB.y + 4} rx="44" ry="12" fill="none" stroke="#f97316" strokeOpacity="0.18" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <ellipse className="hero-visual-flow" cx="50" cy={HUB.y + 4} rx="33" ry="9" fill="none" stroke="#fb923c" strokeOpacity="0.45" strokeWidth="1.4" strokeDasharray="3 5" vectorEffect="non-scaling-stroke" />

          {/* Glow pools under each card */}
          {modules.map((m) => {
            const p = floorPoint(m);
            return <ellipse key={`s-${m.title}`} cx={p.x} cy={p.y} rx="15" ry="3.6" fill="url(#hv-shadow)" />;
          })}

          {/* Connectors along the floor */}
          {modules.map((m) => (
            <g key={`c-${m.title}`}>
              <path d={connector(m)} fill="none" stroke="#f97316" strokeOpacity="0.18" strokeWidth="3" vectorEffect="non-scaling-stroke" />
              <path className="hero-visual-flow" d={connector(m)} fill="none" stroke="#fdba74" strokeWidth="1.6" strokeDasharray="3 6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            </g>
          ))}

          {/* Pedestal: three stacked tiers */}
          <ellipse cx="50" cy={HUB.y + 3} rx="30" ry="8" fill="url(#hv-shadow)" />
          <Tier cy={HUB.y - 4} rx={22} ry={6} h={3.6} glow={0.55} />
          <Tier cy={HUB.y - 8.5} rx={17.5} ry={4.8} h={3.2} glow={0.7} />
          <Tier cy={HUB.y - 12.5} rx={13} ry={3.6} h={3} glow={0.95} />
          {/* Light beam from the pedestal up to the hub */}
          <path d={`M${50 - 9} ${HUB.y - 12.5} L ${50 - 14} 46 L ${50 + 14} 46 L ${50 + 9} ${HUB.y - 12.5} Z`} fill="url(#hv-beam)" />
        </svg>

        {/* Hub card standing on the pedestal */}
        <div
          className="absolute z-10 w-[34%]"
          style={{ left: "50%", top: "40%", transform: "translate(-50%, -50%) perspective(900px) rotateX(6deg)" }}
        >
          <div className="hero-visual-hub relative flex flex-col items-center rounded-2xl border border-orange-400/60 bg-gradient-to-b from-[#1c2b52] to-[#0e1830] px-3 pb-4 pt-3.5 text-center">
            <span className="text-xl font-bold leading-tight text-white">
              DS <span className="text-orange-400">Infotech</span>
            </span>
            <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-slate-300">
              Learning Hub
            </span>
            <div className="mt-3 flex gap-2">
              {steps.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[0.6rem] font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                >
                  <Icon size={14} className="text-orange-400" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Module cards, angled toward the hub */}
        {modules.map((m, i) => {
          const Icon = m.icon;
          const turn = m.x < 50 ? 12 : -12;
          const tilt = m.y < 40 ? 10 : m.y > 60 ? 4 : 7;
          return (
            <div
              key={m.title}
              className="absolute z-10 w-[28%]"
              style={{
                left: `${m.x}%`,
                top: `${m.y}%`,
                transform: `translate(-50%, -50%) perspective(700px) rotateY(${turn}deg) rotateX(${tilt}deg)`,
              }}
            >
              <div className="hero-visual-card" style={{ animationDelay: `${i * 0.6}s` }}>
                <div className="hero-visual-slab rounded-2xl border border-white/15 p-3">
                  <div className="flex items-center gap-2">
                    <span className="hero-visual-chip flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white">
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
