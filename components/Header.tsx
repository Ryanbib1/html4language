"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { getAutoCoderHref, getAutoCoderUrl, locales, type Dictionary, type Locale } from "@/lib/i18n";

type HeaderProps = {
  lang: Locale;
  copy: Dictionary["header"];
};

const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
  fr: "FR"
};

const logoIconSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/brand/autocoder-icon.png`;

export function Header({ lang, copy }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const startBuildingUrl = getAutoCoderUrl(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const localizedPath = useMemo(() => {
    return (locale: Locale) => {
      const segments = pathname.split("/").filter(Boolean);
      const rest = locales.includes(segments[0] as Locale) ? segments.slice(1) : segments;
      return `/${[locale, ...rest].join("/")}`;
    };
  }, [pathname]);

  const navItems = copy.nav.map((item) => ({
    ...item,
    href: getAutoCoderHref(item.href, lang)
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[rgba(247,251,246,0.88)] backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link href={`/${lang}`} className="group flex items-center text-[color:var(--ink)]" aria-label="AutoCoder home">
          <span className="brand-logo-shell flex h-12 items-center gap-3 rounded-[8px] border border-[color:var(--mint-line)] px-3 pr-4 transition-transform duration-300 group-hover:-translate-y-0.5">
            <span className="grid size-9 place-items-center rounded-[8px] bg-[color:var(--mint-soft)]">
              <Image
                src={logoIconSrc}
                alt=""
                width={50}
                height={36}
                priority
                className="h-7 w-auto"
              />
            </span>
            <span className="text-lg font-black tracking-normal text-[color:var(--ink)]">AutoCoder.cc</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[color:var(--muted)] lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-[color:var(--ink)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center rounded-[8px] border border-[color:var(--line)] bg-white p-1" aria-label={copy.languageLabel}>
            {locales.map((locale) => (
              <Link
                key={locale}
                href={localizedPath(locale)}
                className={`rounded-[6px] px-2.5 py-1.5 text-xs font-semibold transition ${
                  locale === lang
                    ? "text-on-mint bg-[color:var(--mint)] text-[#06251b]"
                    : "text-[color:var(--muted)] hover:bg-[#f1ede6] hover:text-[color:var(--ink)]"
                }`}
              >
                {localeLabels[locale]}
              </Link>
            ))}
          </div>
          <Link
            href={startBuildingUrl}
            className="text-on-mint rounded-[8px] bg-[color:var(--mint)] px-5 py-3 text-sm font-black text-[#06251b] shadow-[0_14px_30px_rgba(19,224,155,0.24)] transition hover:-translate-y-0.5 hover:bg-[#35e8ac]"
          >
            {copy.cta}
          </Link>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-[8px] border border-[color:var(--line)] bg-white text-[color:var(--ink)] lg:hidden"
          aria-label={isOpen ? copy.menuClose : copy.menuOpen}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[color:var(--line)] bg-[rgba(247,251,246,0.98)] lg:hidden">
          <div className="section-shell grid gap-4 py-5">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[8px] px-3 py-3 text-sm font-semibold text-[color:var(--muted)] hover:bg-white hover:text-[color:var(--ink)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-wrap items-center gap-2 rounded-[8px] border border-[color:var(--line)] bg-white p-2" aria-label={copy.languageLabel}>
              {locales.map((locale) => (
                <Link
                  key={locale}
                  href={localizedPath(locale)}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-[6px] px-3 py-2 text-xs font-semibold transition ${
                    locale === lang
                      ? "text-on-mint bg-[color:var(--mint)] text-[#06251b]"
                      : "text-[color:var(--muted)] hover:bg-[#f1ede6] hover:text-[color:var(--ink)]"
                  }`}
                >
                  {localeLabels[locale]}
                </Link>
              ))}
            </div>
            <Link
              href={startBuildingUrl}
              onClick={() => setIsOpen(false)}
              className="text-on-mint rounded-[8px] bg-[color:var(--mint)] px-5 py-3 text-center text-sm font-black text-[#06251b]"
            >
              {copy.cta}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
