"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getAutoCoderPricingUrl, type Dictionary, type Locale } from "@/lib/i18n";

type PlansPreviewProps = {
  lang: Locale;
  copy: Dictionary["plans"];
};

export function PlansPreview({ lang, copy }: PlansPreviewProps) {
  const pricingUrl = getAutoCoderPricingUrl(lang);

  return (
    <section id="plans" className="bg-[#f1faf4] py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[color:var(--leaf)]">{copy.eyebrow}</p>
            <h2 className="text-balance mt-4 text-4xl font-black leading-tight text-[color:var(--ink)] sm:text-5xl">
              {copy.heading}
            </h2>
            <p className="text-pretty mt-5 text-lg leading-8 text-[color:var(--muted)]">{copy.description}</p>
          </div>
          <a
            href={pricingUrl}
            className="text-on-mint inline-flex items-center justify-center gap-2 rounded-[8px] bg-[color:var(--mint)] px-5 py-3 text-sm font-black text-[#06251b] transition hover:-translate-y-0.5 hover:bg-[#35e8ac] lg:justify-self-end"
          >
            {copy.cta}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {copy.items.map((plan, index) => (
            <motion.article
              key={plan.title}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[8px] border border-[color:var(--line)] bg-white p-6 shadow-[0_18px_40px_rgba(7,23,18,0.06)]"
            >
              <h3 className="text-2xl font-black text-[color:var(--ink)]">{plan.title}</h3>
              <p className="text-pretty mt-3 min-h-24 leading-7 text-[color:var(--muted)]">{plan.description}</p>
              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-[color:var(--ink)]">
                    <CheckCircle2 size={17} className="text-[color:var(--leaf)]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
