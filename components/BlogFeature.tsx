import Image from "next/image";
import { ArrowRight, Newspaper } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

type BlogFeatureProps = {
  copy: Dictionary["blogFeature"];
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const blogCases = [
  {
    href: "https://www.autocoder.cc/docs/blog/food-truck-crm-autocoder",
    image: `${basePath}/screenshots/food-truck-crm-blog.png`
  },
  {
    href: "https://www.autocoder.cc/docs/blog/match-night-booking-system",
    image: `${basePath}/screenshots/match-night-booking.png`
  },
  {
    href: "https://www.autocoder.cc/docs/blog/campsite-multi-role-booking-app",
    image: `${basePath}/screenshots/campsite-booking-app.png`
  }
];

export function BlogFeature({ copy }: BlogFeatureProps) {
  return (
    <section id="case-study" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--mint-line)] bg-[color:var(--mint-soft)] px-3 py-1.5 text-sm font-black text-[color:var(--leaf)]">
            <Newspaper size={16} aria-hidden="true" />
            {copy.eyebrow}
          </div>
          <h2 className="text-balance text-4xl font-black leading-tight text-[color:var(--ink)] sm:text-5xl">{copy.heading}</h2>
          <p className="text-pretty mt-5 text-lg leading-8 text-[color:var(--muted)]">{copy.description}</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {copy.items.map((item, index) => {
            const blogCase = blogCases[index] ?? blogCases[0];

            return (
              <article key={item.title} className="overflow-hidden rounded-[8px] border border-[color:var(--line)] bg-white shadow-[0_22px_54px_rgba(7,23,18,0.08)]">
                <a href={blogCase.href} className="group relative block aspect-[16/10] overflow-hidden bg-[color:var(--mint-soft)]" aria-label={item.imageAlt}>
                  <Image
                    src={blogCase.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </a>
                <div className="p-6">
                  <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[color:var(--mint-soft)] px-3 py-1 text-xs font-black uppercase tracking-normal text-[color:var(--leaf)]">
                    <Newspaper size={14} aria-hidden="true" />
                    {item.category}
                  </p>
                  <h3 className="text-balance text-xl font-black leading-tight text-[color:var(--ink)]">{item.title}</h3>
                  <p className="text-pretty mt-3 leading-7 text-[color:var(--muted)]">{item.description}</p>
                  <a
                    href={blogCase.href}
                    className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-black text-[color:var(--leaf)] transition hover:text-[color:var(--ink)]"
                  >
                    {copy.cta}
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
