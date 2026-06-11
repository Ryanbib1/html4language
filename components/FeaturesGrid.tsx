"use client";

import { motion } from "framer-motion";
import { Code2, Languages, Layers, Rocket } from "lucide-react";
import type { ComponentType } from "react";
import type { Dictionary } from "@/lib/i18n";

type FeaturesGridProps = {
  copy: Dictionary["features"];
};

const icons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  code: Code2,
  deploy: Rocket,
  stack: Layers,
  language: Languages
};

export function FeaturesGrid({ copy }: FeaturesGridProps) {
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

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {copy.items.map((item, index) => {
            const Icon = icons[item.icon] ?? Code2;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 1, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-[8px] border border-[color:var(--line)] bg-white p-6 shadow-[0_18px_40px_rgba(17,19,22,0.06)] transition hover:-translate-y-1 hover:border-[color:var(--mint-line)] hover:shadow-[0_22px_46px_rgba(19,224,155,0.14)]"
              >
                <div className="mb-6 grid size-12 place-items-center rounded-[8px] bg-[color:var(--mint-soft)] text-[color:var(--leaf)] transition group-hover:bg-[color:var(--mint)] group-hover:text-[#06251b]">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-[color:var(--ink)]">{item.title}</h3>
                <p className="text-pretty mt-3 leading-7 text-[color:var(--muted)]">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
