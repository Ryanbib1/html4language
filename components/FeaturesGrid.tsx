"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";

type FeaturesGridProps = {
  copy: Dictionary["features"];
};

const featuresImageSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/screenshots/features-grid.jpg`;

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

        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.45 }}
          className="mt-12"
        >
          <Image
            src={featuresImageSrc}
            alt={copy.items.map((item) => item.title).join(", ")}
            width={2448}
            height={1050}
            className="h-auto w-full rounded-[8px] shadow-[0_18px_42px_rgba(7,23,18,0.08)]"
            sizes="(min-width: 1280px) 1180px, calc(100vw - 32px)"
          />
        </motion.div>
      </div>
    </section>
  );
}
