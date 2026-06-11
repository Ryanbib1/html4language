import en from "@/dictionaries/en.json";

export const locales = ["en", "es", "pt", "fr"] as const;

export type Locale = (typeof locales)[number];
export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
  pt: () => import("@/dictionaries/pt.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default)
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getAutoCoderUrl(locale: Locale) {
  return `https://www.autocoder.cc/${locale}/`;
}

export function getAutoCoderTemplatesUrl(locale: Locale) {
  return `https://www.autocoder.cc/${locale}/templates`;
}

export function getAutoCoderPricingUrl(locale: Locale) {
  return `https://www.autocoder.cc/${locale}/pricing`;
}

export const autoCoderBlogUrl = "https://www.autocoder.cc/docs/blog/latest";

export const autoCoderSocialUrls = {
  instagram: "https://www.instagram.com/autocoder.cc?igsh=MWJqNnEyY2MzaXB5MQ%3D%3D&utm_source=qr",
  x: "https://x.com/autocoder_cc"
} as const;

export function getAutoCoderHref(target: string, locale: Locale) {
  if (target === "home") {
    return getAutoCoderUrl(locale);
  }

  if (target === "templates") {
    return getAutoCoderTemplatesUrl(locale);
  }

  if (target === "pricing" || target === "plans") {
    return getAutoCoderPricingUrl(locale);
  }

  if (target === "blog") {
    return autoCoderBlogUrl;
  }

  if (target === "docs") {
    return "https://www.autocoder.cc/docs";
  }

  if (target in autoCoderSocialUrls) {
    return autoCoderSocialUrls[target as keyof typeof autoCoderSocialUrls];
  }

  if (target.startsWith("#")) {
    return `/${locale}${target}`;
  }

  return target;
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
