"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CloudUpload, Code2, Database, Globe2, Languages, Layers3, MessageSquareText, Rocket } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";

type FeaturesGridProps = {
  lang: Locale;
  copy: Dictionary["features"];
};

function IconShell({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative grid size-16 place-items-center rounded-[8px] border border-[color:var(--mint-line)] bg-[color:var(--mint-soft)] text-[color:var(--leaf)] shadow-sm">
      {children}
    </span>
  );
}

function NaturalLanguageIcon() {
  return (
    <IconShell>
      <MessageSquareText size={25} strokeWidth={2.2} aria-hidden="true" />
      <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full border border-[color:var(--mint-line)] bg-white text-[color:var(--leaf)]">
        <Code2 size={15} strokeWidth={2.3} aria-hidden="true" />
      </span>
      <span className="absolute bottom-3 h-1 w-8 rounded-full bg-[color:var(--mint-line)]" />
    </IconShell>
  );
}

function DeploymentIcon() {
  return (
    <IconShell>
      <Rocket size={26} strokeWidth={2.2} aria-hidden="true" />
      <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full border border-[color:var(--mint-line)] bg-white text-[color:var(--leaf)]">
        <CheckCircle2 size={16} strokeWidth={2.4} aria-hidden="true" />
      </span>
      <span className="absolute -bottom-2 -left-2 grid size-7 place-items-center rounded-full border border-[color:var(--mint-line)] bg-white text-[color:var(--leaf)]">
        <CloudUpload size={15} strokeWidth={2.2} aria-hidden="true" />
      </span>
    </IconShell>
  );
}

function FullStackIcon() {
  return (
    <IconShell>
      <Layers3 size={26} strokeWidth={2.2} aria-hidden="true" />
      <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full border border-[color:var(--mint-line)] bg-white text-[color:var(--leaf)]">
        <Database size={15} strokeWidth={2.3} aria-hidden="true" />
      </span>
      <span className="absolute bottom-2 flex gap-1">
        <span className="size-1.5 rounded-full bg-[color:var(--mint)]" />
        <span className="size-1.5 rounded-full bg-[color:var(--mint)]" />
        <span className="size-1.5 rounded-full bg-[color:var(--mint)]" />
      </span>
    </IconShell>
  );
}

function MultiLanguageIcon({ lang }: { lang: Locale }) {
  const aiLabel = lang === "en" ? "AI" : "IA";

  return (
    <IconShell>
      <Languages size={26} strokeWidth={2.2} aria-hidden="true" />
      <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full border border-[color:var(--mint-line)] bg-white text-[color:var(--leaf)]">
        <Globe2 size={15} strokeWidth={2.3} aria-hidden="true" />
      </span>
      <span className="absolute -bottom-2 -left-2 rounded-full border border-[color:var(--mint-line)] bg-white px-1.5 py-0.5 text-[9px] font-black leading-none text-[color:var(--leaf)]">
        {aiLabel}
      </span>
    </IconShell>
  );
}

function FeatureIcon({ icon, lang }: { icon: string; lang: Locale }) {
  if (icon === "deploy") {
    return <DeploymentIcon />;
  }

  if (icon === "stack") {
    return <FullStackIcon />;
  }

  if (icon === "language") {
    return <MultiLanguageIcon lang={lang} />;
  }

  return <NaturalLanguageIcon />;
}

export function FeaturesGrid({ lang, copy }: FeaturesGridProps) {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-normal text-[color:var(--leaf)]">{copy.eyebrow}</p>
          <h2 className="text-balance mt-4 text-4xl font-black leading-tight text-[color:var(--ink)] sm:text-5xl">
            {copy.heading}
          </h2>
          <p className="text-pretty mt-5 text-lg leading-8 text-[color:var(--muted)]">{copy.description}</p>
        </div>

        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.45 }}
          className="mt-12 grid gap-4 rounded-[8px] bg-white/66 p-4 shadow-[0_18px_48px_rgba(7,23,18,0.06)] lg:grid-cols-2"
        >
          {copy.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 1, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className="rounded-[8px] border border-[color:var(--line)] bg-white p-7 shadow-sm sm:p-8"
            >
              <FeatureIcon icon={item.icon} lang={lang} />
              <h3 className="mt-9 text-2xl font-black text-[color:var(--ink)]">{item.title}</h3>
              <p className="text-pretty mt-4 leading-7 text-[color:var(--muted)]">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
