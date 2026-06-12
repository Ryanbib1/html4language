import { CheckCircle2, Code2, GitBranch, Rocket, Server, Sparkles, UsersRound } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";

type TrustSignalsProps = {
  lang: Locale;
  copy: Dictionary["trustSignals"];
};

function IconShell({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative grid size-14 place-items-center rounded-[8px] border border-[color:var(--mint-line)] bg-[color:var(--mint-soft)] text-[color:var(--leaf)] shadow-sm">
      {children}
    </span>
  );
}

function AiTeamIcon({ lang }: { lang: Locale }) {
  const label = lang === "en" ? "AI" : "IA";

  return (
    <IconShell>
      <UsersRound size={24} strokeWidth={2.2} aria-hidden="true" />
      <Sparkles size={12} className="absolute right-1.5 top-1.5 text-[color:var(--leaf)]" aria-hidden="true" />
      <span className="absolute -bottom-2 -right-2 rounded-full border border-[color:var(--mint-line)] bg-white px-1.5 py-0.5 text-[9px] font-black leading-none text-[color:var(--leaf)]">
        {label}
      </span>
    </IconShell>
  );
}

function ExportableCodeIcon() {
  return (
    <IconShell>
      <Code2 size={24} strokeWidth={2.2} aria-hidden="true" />
      <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full border border-[color:var(--mint-line)] bg-white text-[color:var(--leaf)]">
        <GitBranch size={13} strokeWidth={2.3} aria-hidden="true" />
      </span>
      <span className="absolute bottom-2 h-1 w-7 rounded-full bg-[color:var(--mint-line)]" />
    </IconShell>
  );
}

function DeployHostIcon() {
  return (
    <IconShell>
      <Rocket size={24} strokeWidth={2.2} aria-hidden="true" />
      <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full border border-[color:var(--mint-line)] bg-white text-[color:var(--leaf)]">
        <CheckCircle2 size={14} strokeWidth={2.4} aria-hidden="true" />
      </span>
      <span className="absolute -bottom-2 -left-2 grid size-6 place-items-center rounded-full border border-[color:var(--mint-line)] bg-white text-[color:var(--leaf)]">
        <Server size={13} strokeWidth={2.2} aria-hidden="true" />
      </span>
    </IconShell>
  );
}

function TrustIcon({ index, lang }: { index: number; lang: Locale }) {
  if (index === 1) {
    return <ExportableCodeIcon />;
  }

  if (index === 2) {
    return <DeployHostIcon />;
  }

  return <AiTeamIcon lang={lang} />;
}

export function TrustSignals({ lang, copy }: TrustSignalsProps) {
  return (
    <section className="py-14 sm:py-16" aria-label="AutoCoder trust signals">
      <div className="section-shell">
        <div className="grid gap-4 rounded-[8px] bg-white/66 p-4 shadow-[0_18px_48px_rgba(7,23,18,0.06)] md:grid-cols-3">
          {copy.items.map((item, index) => (
            <article key={item.title} className="rounded-[8px] border border-[color:var(--line)] bg-white p-7 shadow-sm sm:p-8">
              <TrustIcon index={index} lang={lang} />
              <h2 className="mt-7 text-xl font-black text-[color:var(--ink)]">{item.title}</h2>
              <p className="text-pretty mt-4 leading-7 text-[color:var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
