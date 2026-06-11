"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { getAutoCoderUrl, type Dictionary, type Locale } from "@/lib/i18n";

type FinalCTAProps = {
  lang: Locale;
  copy: Dictionary["finalCta"];
};

export function FinalCTA({ lang, copy }: FinalCTAProps) {
  const startBuildingUrl = getAutoCoderUrl(lang);

  return (
    <section id="start" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[8px] bg-[#06251b] p-8 text-center text-white shadow-[0_28px_70px_rgba(6,37,27,0.24)] sm:p-12 lg:p-14"
        >
          <div className="mx-auto grid max-w-4xl gap-8">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-[color:var(--mint)]">{copy.eyebrow}</p>
              <h2 className="text-balance mt-4 text-4xl font-black leading-tight sm:text-5xl">{copy.heading}</h2>
              <p className="text-pretty mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/72">{copy.description}</p>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={startBuildingUrl}
                className="text-on-mint inline-flex items-center justify-center gap-2 rounded-[8px] bg-[color:var(--mint)] px-6 py-4 text-sm font-black text-[#06251b] transition hover:-translate-y-0.5 hover:bg-[#35e8ac]"
              >
                {copy.primaryCta}
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                href="https://www.autocoder.cc/docs/blog/latest"
                className="text-on-ink inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/20 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/8"
              >
                <PlayCircle size={17} aria-hidden="true" />
                {copy.secondaryCta}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
