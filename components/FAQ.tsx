import type { Dictionary } from "@/lib/i18n";

type FAQProps = {
  copy: Dictionary["faq"];
};

export function FAQ({ copy }: FAQProps) {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-[color:var(--leaf)]">{copy.eyebrow}</p>
          <h2 className="text-balance mt-4 text-4xl font-black leading-tight text-[color:var(--ink)] sm:text-5xl">
            {copy.heading}
          </h2>
        </div>
        <div className="grid gap-3">
          {copy.items.map((item) => (
            <details key={item.question} className="group rounded-[8px] border border-[color:var(--line)] bg-white p-5 shadow-[0_14px_34px_rgba(7,23,18,0.04)]">
              <summary className="cursor-pointer list-none text-lg font-black text-[color:var(--ink)]">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="grid size-7 shrink-0 place-items-center rounded-[8px] bg-[color:var(--mint-soft)] text-[color:var(--leaf)] transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="text-pretty mt-4 leading-7 text-[color:var(--muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
