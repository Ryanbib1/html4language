import type { Dictionary } from "@/lib/i18n";

type SocialProofProps = {
  copy: Dictionary["socialProof"];
};

export function SocialProof({ copy }: SocialProofProps) {
  return (
    <section aria-label={copy.label} className="border-y border-[color:var(--line)] bg-white/68">
      <div className="section-shell flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-semibold text-[color:var(--muted)]">{copy.label}</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:flex-wrap md:justify-end">
          {copy.logos.map((logo) => (
            <span
              key={logo}
              className="rounded-[8px] border border-[color:var(--line)] bg-white px-4 py-2 text-center text-sm font-black tracking-normal text-[color:var(--ink)] shadow-sm"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
