"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

type HowItWorksProps = {
  copy: Dictionary["howItWorks"];
};

export function HowItWorks({ copy }: HowItWorksProps) {
  return (
    <section id="workflow" className="border-y border-[color:var(--line)] bg-[#eaf8ef] py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-normal text-[color:var(--leaf)]">{copy.eyebrow}</p>
          <h2 className="text-balance mt-4 text-4xl font-black leading-tight text-[color:var(--ink)] sm:text-5xl">
            {copy.heading}
          </h2>
          <p className="text-pretty mt-5 text-lg leading-8 text-[color:var(--muted)]">{copy.description}</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {copy.steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative rounded-[8px] border border-[color:var(--line)] bg-white p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-[8px] bg-[color:var(--mint)] text-sm font-black text-[#06251b]">
                  {index + 1}
                </span>
                {index < copy.steps.length - 1 ? (
                  <ArrowRight className="hidden text-[color:var(--muted)] lg:block" size={22} aria-hidden="true" />
                ) : null}
              </div>
              <h3 className="text-xl font-black text-[color:var(--ink)]">{step.title}</h3>
              <p className="text-pretty mt-3 leading-7 text-[color:var(--muted)]">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
