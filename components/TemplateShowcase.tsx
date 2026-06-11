"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, BotMessageSquare, CheckCircle2, CircleDollarSign, Database, KanbanSquare, MessageSquareText, ShieldCheck } from "lucide-react";
import { getAutoCoderTemplatesUrl, type Dictionary, type Locale } from "@/lib/i18n";

type TemplateShowcaseProps = {
  lang: Locale;
  copy: Dictionary["templates"];
};

function SaasPreview() {
  return (
    <div className="relative h-full rounded-[8px] border border-[rgba(15,127,99,0.18)] bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 size={17} className="text-[color:var(--leaf)]" aria-hidden="true" />
          <span className="h-2 w-20 rounded-full bg-[color:var(--mint-line)]" />
        </div>
        <CircleDollarSign size={17} className="text-[color:var(--leaf)]" aria-hidden="true" />
      </div>
      <div className="mt-4 grid grid-cols-[1.1fr_0.9fr] gap-3">
        <div className="rounded-[8px] bg-[#edf9f3] p-3">
          <div className="flex h-20 items-end gap-1.5">
            {[38, 54, 42, 68, 58, 82, 74].map((height) => (
              <span key={height} className="flex-1 rounded-t-[5px] bg-[color:var(--mint)]" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <div className="grid gap-2">
          <span className="h-7 rounded-[7px] bg-[#dff8ed]" />
          <span className="h-7 rounded-[7px] bg-[#c5f1de]" />
          <span className="h-7 rounded-[7px] bg-[#eff7f3]" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <span className="h-5 rounded-full bg-[#dff8ed]" />
        <span className="h-5 rounded-full bg-[#eff7f3]" />
        <span className="h-5 rounded-full bg-[#dff8ed]" />
      </div>
    </div>
  );
}

function OperationsPreview() {
  return (
    <div className="relative h-full rounded-[8px] border border-[rgba(15,127,99,0.18)] bg-white p-3 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <KanbanSquare size={17} className="text-[color:var(--leaf)]" aria-hidden="true" />
          <span className="h-2 w-24 rounded-full bg-[color:var(--mint-line)]" />
        </div>
        <ShieldCheck size={17} className="text-[color:var(--leaf)]" aria-hidden="true" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((column) => (
          <div key={column} className="rounded-[7px] bg-[#edf9f3] p-2">
            <span className="mb-2 block h-2 rounded-full bg-[#b9ecd5]" />
            <div className="grid gap-1.5">
              {[0, 1, 2].map((row) => (
                <span
                  key={row}
                  className={`h-6 rounded-[6px] bg-white shadow-sm ${column === 1 && row === 0 ? "border border-[color:var(--mint-line)]" : ""}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-1.5 rounded-[7px] bg-white">
        {[0, 1, 2].map((row) => (
          <span key={row} className="h-3 rounded-full bg-[#dff8ed]" />
        ))}
      </div>
    </div>
  );
}

function AiPortalPreview() {
  return (
    <div className="relative h-full rounded-[8px] border border-[rgba(15,127,99,0.18)] bg-white p-3 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BotMessageSquare size={17} className="text-[color:var(--leaf)]" aria-hidden="true" />
          <span className="h-2 w-20 rounded-full bg-[color:var(--mint-line)]" />
        </div>
        <MessageSquareText size={17} className="text-[color:var(--leaf)]" aria-hidden="true" />
      </div>
      <div className="grid grid-cols-[0.85fr_1.15fr] gap-3">
        <div className="grid gap-2">
          <span className="h-8 rounded-[8px] bg-[#dff8ed]" />
          <span className="h-8 rounded-[8px] bg-[#eff7f3]" />
          <span className="h-8 rounded-[8px] bg-[#dff8ed]" />
        </div>
        <div className="rounded-[8px] bg-[#edf9f3] p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-full bg-[color:var(--mint)] text-[#06251b]">
              <CheckCircle2 size={14} aria-hidden="true" />
            </span>
            <span className="h-2 flex-1 rounded-full bg-[#b9ecd5]" />
          </div>
          <div className="grid gap-2">
            <span className="h-3 rounded-full bg-white" />
            <span className="h-3 w-5/6 rounded-full bg-white" />
            <span className="h-8 rounded-[7px] bg-gradient-to-br from-[#13e09b] to-[#b8f0d8]" />
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <Database size={16} className="text-[color:var(--leaf)]" aria-hidden="true" />
        <span className="h-3 flex-1 rounded-full bg-[#dff8ed]" />
      </div>
    </div>
  );
}

function TemplatePreview({ index }: { index: number }) {
  if (index === 1) {
    return <OperationsPreview />;
  }

  if (index === 2) {
    return <AiPortalPreview />;
  }

  return <SaasPreview />;
}

export function TemplateShowcase({ lang, copy }: TemplateShowcaseProps) {
  const templatesUrl = getAutoCoderTemplatesUrl(lang);

  return (
    <section id="templates" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[color:var(--leaf)]">{copy.eyebrow}</p>
            <h2 className="text-balance mt-4 text-4xl font-black leading-tight text-[color:var(--ink)] sm:text-5xl">
              {copy.heading}
            </h2>
            <p className="text-pretty mt-5 text-lg leading-8 text-[color:var(--muted)]">{copy.description}</p>
          </div>
          <div className="lg:justify-self-end">
            <a
              href={templatesUrl}
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[color:var(--mint-line)] bg-[color:var(--mint-soft)] px-5 py-3 text-sm font-black text-[color:var(--leaf)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              {copy.cta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {copy.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[8px] border border-[color:var(--line)] bg-white p-5 shadow-[0_18px_40px_rgba(7,23,18,0.06)]"
            >
              <div className="mb-5 h-44 overflow-hidden rounded-[8px] border border-[color:var(--line)] bg-[color:var(--mint-soft)] p-4">
                <TemplatePreview index={index} />
              </div>
              <h3 className="text-xl font-black text-[color:var(--ink)]">{item.title}</h3>
              <p className="text-pretty mt-3 leading-7 text-[color:var(--muted)]">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[color:var(--mint-line)] bg-[color:var(--mint-soft)] px-3 py-1 text-xs font-black text-[color:var(--leaf)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
