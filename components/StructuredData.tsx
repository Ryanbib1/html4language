import { getAutoCoderUrl, type Dictionary, type Locale } from "@/lib/i18n";

type StructuredDataProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function StructuredData({ lang, dictionary }: StructuredDataProps) {
  const baseUrl = getAutoCoderUrl(lang);
  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AutoCoder",
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    url: baseUrl,
    description: dictionary.meta.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: dictionary.plans.items[0].title
    }
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dictionary.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
