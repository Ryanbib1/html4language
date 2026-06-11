import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { getAutoCoderHref, type Dictionary, type Locale } from "@/lib/i18n";

type FooterProps = {
  lang: Locale;
  copy: Dictionary["footer"];
};

const logoIconSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/brand/autocoder-icon.png`;

export function Footer({ lang, copy }: FooterProps) {
  return (
    <footer className="border-t border-[color:var(--line)] bg-white">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center text-[color:var(--ink)]" aria-label="AutoCoder">
            <span className="brand-logo-shell flex h-12 items-center gap-3 rounded-[8px] border border-[color:var(--mint-line)] px-3 pr-4">
              <span className="grid size-9 place-items-center rounded-[8px] bg-[color:var(--mint-soft)]">
                <Image
                  src={logoIconSrc}
                  alt=""
                  width={50}
                  height={36}
                  className="h-7 w-auto"
                />
              </span>
              <span className="text-lg font-black tracking-normal text-[color:var(--ink)]">AutoCoder.cc</span>
            </span>
          </div>
          <p className="text-pretty mt-5 max-w-sm leading-7 text-[color:var(--muted)]">{copy.tagline}</p>
          <div className="mt-6">
            <h2 className="text-sm font-black text-[color:var(--ink)]">{copy.social.title}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {copy.social.links.map((link) => (
                <a
                  key={link.href}
                  href={getAutoCoderHref(link.href, lang)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[8px] border border-[color:var(--line)] px-3 py-2 text-sm font-semibold text-[color:var(--muted)] transition hover:border-[color:var(--mint-line)] hover:bg-[color:var(--mint-soft)] hover:text-[color:var(--leaf)]"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {copy.columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-black text-[color:var(--ink)]">{column.title}</h2>
              <ul className="mt-4 grid gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={getAutoCoderHref(link.href, lang)} className="text-sm font-medium text-[color:var(--muted)] transition hover:text-[color:var(--ink)]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[color:var(--line)] py-5">
        <div className="section-shell text-sm text-[color:var(--muted)]">{copy.copyright}</div>
      </div>
    </footer>
  );
}
