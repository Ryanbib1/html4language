import Image from "next/image";
import { ArrowRight, Newspaper } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

type BlogFeatureProps = {
  copy: Dictionary["blogFeature"];
};

const blogImageSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/screenshots/food-truck-crm-blog.png`;
const blogHref = "https://www.autocoder.cc/docs/blog/food-truck-crm-autocoder";

export function BlogFeature({ copy }: BlogFeatureProps) {
  return (
    <section id="case-study" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-[8px] border border-[color:var(--line)] bg-white shadow-[0_22px_54px_rgba(7,23,18,0.08)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--mint-line)] bg-[color:var(--mint-soft)] px-3 py-1.5 text-sm font-black text-[color:var(--leaf)]">
              <Newspaper size={16} aria-hidden="true" />
              {copy.eyebrow}
            </div>
            <h2 className="text-balance text-3xl font-black leading-tight text-[color:var(--ink)] sm:text-4xl">
              {copy.heading}
            </h2>
            <p className="text-pretty mt-5 text-lg leading-8 text-[color:var(--muted)]">{copy.description}</p>
            <a
              href={blogHref}
              className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-[8px] bg-[color:var(--mint)] px-5 py-3 text-sm font-black text-[#06251b] shadow-[0_14px_30px_rgba(19,224,155,0.2)] transition hover:-translate-y-0.5 hover:bg-[#35e8ac]"
            >
              {copy.cta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <a href={blogHref} className="group relative block min-h-[260px] overflow-hidden bg-[color:var(--mint-soft)] sm:min-h-[360px]" aria-label={copy.imageAlt}>
            <Image
              src={blogImageSrc}
              alt={copy.imageAlt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
