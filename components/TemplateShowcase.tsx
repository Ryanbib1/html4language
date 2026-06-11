"use client";

import { motion } from "framer-motion";
import { ArrowRight, LayoutTemplate } from "lucide-react";
import { getAutoCoderTemplatesUrl, type Dictionary, type Locale } from "@/lib/i18n";

type TemplateShowcaseProps = {
  lang: Locale;
  copy: Dictionary["templates"];
};

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
              <div className="mb-5 flex h-40 items-end overflow-hidden rounded-[8px] border border-[color:var(--line)] bg-[color:var(--mint-soft)] p-4">
                <div className="w-full rounded-[8px] border border-[rgba(15,127,99,0.18)] bg-white p-3 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <LayoutTemplate size={17} className="text-[color:var(--leaf)]" aria-hidden="true" />
                    <span className="h-2 w-20 rounded-full bg-[color:var(--mint-line)]" />
                  </div>
                  <div className="grid gap-2">
                    <span className="h-3 rounded-full bg-[#dff8ed]" />
                    <span className="h-3 w-4/5 rounded-full bg-[#dff8ed]" />
                    <span className="h-14 rounded-[8px] bg-gradient-to-br from-[#13e09b] to-[#b8f0d8]" />
                  </div>
                </div>
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
