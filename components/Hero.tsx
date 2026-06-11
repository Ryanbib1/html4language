"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";
import { getAutoCoderHref, getAutoCoderUrl, type Dictionary, type Locale } from "@/lib/i18n";

type HeroProps = {
  lang: Locale;
  copy: Dictionary["hero"];
};

export function Hero({ lang, copy }: HeroProps) {
  const startBuildingUrl = getAutoCoderUrl(lang);
  const docsUrl = getAutoCoderHref("docs", lang);

  return (
    <section className="surface-grid overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      <div className="section-shell grid items-center gap-12 pb-16 lg:grid-cols-[1fr_0.92fr] lg:gap-14 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--mint-line)] bg-[color:var(--mint-soft)] px-3 py-1.5 text-sm font-semibold text-[color:var(--leaf)] shadow-sm">
            <Sparkles size={16} aria-hidden="true" />
            {copy.eyebrow}
          </div>
          <h1 className="text-balance text-4xl font-black leading-[0.98] tracking-normal text-[color:var(--ink)] sm:text-6xl sm:leading-[0.95] lg:text-7xl">
            {copy.title}
          </h1>
          <p className="text-pretty mt-7 max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
            {copy.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={startBuildingUrl}
              className="text-on-mint inline-flex items-center justify-center gap-2 rounded-[8px] bg-[color:var(--mint)] px-6 py-4 text-sm font-black text-[#06251b] shadow-[0_18px_36px_rgba(19,224,155,0.24)] transition hover:-translate-y-0.5 hover:bg-[#35e8ac]"
            >
              {copy.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href={docsUrl}
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[color:var(--line)] bg-white px-6 py-4 text-sm font-bold text-[color:var(--ink)] transition hover:-translate-y-0.5 hover:border-[color:var(--ink)]"
            >
              <BookOpen size={17} aria-hidden="true" />
              {copy.secondaryCta}
            </a>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {copy.metrics.map((metric) => (
              <div key={metric.label} className="border-l border-[color:var(--line)] pl-4">
                <dt className="text-xl font-black text-[color:var(--ink)]">{metric.value}</dt>
                <dd className="mt-1 text-xs font-semibold uppercase leading-5 text-[color:var(--muted)]">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, rotateX: 6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
          className="relative"
        >
          <div className="rounded-[8px] border border-[rgba(19,224,155,0.18)] bg-[#071712] p-3 shadow-[0_28px_70px_rgba(7,23,18,0.28)]">
            <div className="rounded-[6px] border border-white/10 bg-[#171a1f]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#89f5c9]" />
                  <span className="size-2.5 rounded-full bg-[#f4c95d]" />
                  <span className="size-2.5 rounded-full bg-[color:var(--mint)]" />
                </div>
                <p className="text-xs font-semibold text-white/62">{copy.visualTitle}</p>
              </div>

              <div className="grid gap-4 p-4">
                <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                  <p className="mb-2 text-xs font-bold uppercase text-[color:var(--mint)]">{copy.promptLabel}</p>
                  <p className="text-pretty text-sm leading-6 text-white/86">{copy.prompt}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-[0.85fr_1.15fr]">
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="mb-4 flex items-center gap-2 text-xs font-bold text-white">
                      <motion.span
                        className="size-2 rounded-full bg-[color:var(--mint)]"
                        animate={{ opacity: [0.35, 1, 0.35] }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                      />
                      {copy.status}
                    </div>
                    <div className="grid gap-2">
                      {copy.files.map((file, index) => (
                        <motion.div
                          key={file}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.28 + index * 0.08 }}
                          className="flex items-center gap-2 rounded-[6px] bg-black/20 px-3 py-2 text-xs text-white/70"
                        >
                          <CheckCircle2 size={14} className="text-[color:var(--mint)]" aria-hidden="true" />
                          <span className="truncate">{file}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[8px] border border-white/10 bg-[#0d0f12] p-4 font-mono text-xs leading-6 text-white/76">
                    {copy.codeLines.map((line, index) => (
                      <motion.p
                        key={`${line}-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.32 + index * 0.1 }}
                        className={index === 0 || index === copy.codeLines.length - 1 ? "text-white" : "text-[#9deccf]"}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
