import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

type TrustSignalsProps = {
  copy: Dictionary["trustSignals"];
};

const trustSignalsImageSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/screenshots/trust-signals.jpg`;

export function TrustSignals({ copy }: TrustSignalsProps) {
  return (
    <section className="py-14 sm:py-16" aria-label="AutoCoder trust signals">
      <div className="section-shell">
        <Image
          src={trustSignalsImageSrc}
          alt={copy.items.map((item) => item.title).join(", ")}
          width={2308}
          height={572}
          className="h-auto w-full rounded-[8px] shadow-[0_18px_42px_rgba(7,23,18,0.08)]"
          sizes="(min-width: 1280px) 1180px, calc(100vw - 32px)"
        />
      </div>
    </section>
  );
}
