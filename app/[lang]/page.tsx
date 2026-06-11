import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FAQ } from "@/components/FAQ";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PlansPreview } from "@/components/PlansPreview";
import { SocialProof } from "@/components/SocialProof";
import { StructuredData } from "@/components/StructuredData";
import { TemplateShowcase } from "@/components/TemplateShowcase";
import { TrustSignals } from "@/components/TrustSignals";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}`]))
    }
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang as Locale);

  return (
    <>
      <StructuredData lang={lang as Locale} dictionary={dictionary} />
      <Header lang={lang as Locale} copy={dictionary.header} />
      <main>
        <Hero lang={lang as Locale} copy={dictionary.hero} />
        <SocialProof copy={dictionary.socialProof} />
        <TrustSignals copy={dictionary.trustSignals} />
        <FeaturesGrid copy={dictionary.features} />
        <TemplateShowcase lang={lang as Locale} copy={dictionary.templates} />
        <HowItWorks copy={dictionary.howItWorks} />
        <ComparisonSection copy={dictionary.comparison} />
        <PlansPreview lang={lang as Locale} copy={dictionary.plans} />
        <FAQ copy={dictionary.faq} />
        <FinalCTA lang={lang as Locale} copy={dictionary.finalCta} />
      </main>
      <Footer lang={lang as Locale} copy={dictionary.footer} />
    </>
  );
}
