import { Code2, Rocket, UsersRound } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

type TrustSignalsProps = {
  copy: Dictionary["trustSignals"];
};

const icons = [UsersRound, Code2, Rocket];

export function TrustSignals({ copy }: TrustSignalsProps) {
  return (
    <section className="py-14 sm:py-16" aria-label="AutoCoder trust signals">
      <div className="section-shell grid gap-4 md:grid-cols-3">
        {copy.items.map((item, index) => {
          const Icon = icons[index] ?? UsersRound;

          return (
            <article key={item.title} className="rounded-[8px] border border-[color:var(--line)] bg-white p-5 shadow-[0_14px_34px_rgba(7,23,18,0.05)]">
              <div className="mb-4 grid size-10 place-items-center rounded-[8px] bg-[color:var(--mint-soft)] text-[color:var(--leaf)]">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h2 className="text-lg font-black text-[color:var(--ink)]">{item.title}</h2>
              <p className="text-pretty mt-2 leading-7 text-[color:var(--muted)]">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
