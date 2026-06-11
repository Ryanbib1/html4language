"use client";

import { motion } from "framer-motion";
import { Bot, Boxes, Sparkles } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

type ComparisonSectionProps = {
  copy: Dictionary["comparison"];
};

const icons = [Bot, Boxes, Sparkles];

export function ComparisonSection({ copy }: ComparisonSectionProps) {
  return (
    <section className="border-y border-[color:var(--line)] bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-normal text-[color:var(--leaf)]">{copy.eyebrow}</p>
          <h2 className="text-balance mt-4 text-4xl font-black leading-tight text-[color:var(--ink)] sm:text-5xl">
            {copy.heading}
          </h2>
          <p className="text-pretty mt-5 text-lg leading-8 text-[color:var(--muted)]">{copy.description}</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {copy.columns.map((column, index) => {
            const Icon = icons[index] ?? Sparkles;
            const isAutoCoder = index === copy.columns.length - 1;

            return (
              <motion.article
                key={column.title}
                initial={{ opacity: 1, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.32 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`rounded-[8px] border p-6 ${
                  isAutoCoder
                    ? "border-[color:var(--mint-line)] bg-[color:var(--mint-soft)] shadow-[0_22px_46px_rgba(19,224,155,0.14)]"
                    : "border-[color:var(--line)] bg-[#f9fbf8]"
                }`}
              >
                <div className={`mb-6 grid size-12 place-items-center rounded-[8px] ${isAutoCoder ? "bg-[color:var(--mint)] text-[#06251b]" : "bg-white text-[color:var(--muted)]"}`}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-[color:var(--ink)]">{column.title}</h3>
                <p className="text-pretty mt-3 leading-7 text-[color:var(--muted)]">{column.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
