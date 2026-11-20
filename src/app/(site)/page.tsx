import { classes, faq, site } from "@/content";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { Pains } from "@/components/sections/Pains";
import { Audience } from "@/components/sections/Audience";
import { Program } from "@/components/sections/Program";
import { Comparison } from "@/components/sections/Comparison";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Highlights } from "@/components/sections/Highlights";
import { Experts } from "@/components/sections/Experts";
import { Offer } from "@/components/sections/Offer";
import { Faq } from "@/components/sections/Faq";

const faqText = (f: (typeof faq)[number]) => [f.intro, ...(f.list ?? []), f.outro].filter(Boolean).join(" ");

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Foco no POCUS: Ultrassom à Beira do Leito e Acesso Vascular Guiado",
    description: site.description,
    inLanguage: "pt-BR",
    provider: { "@type": "Organization", name: site.name, url: site.url, sameAs: [site.instagram] },
    hasCourseInstance: classes.map((c) => ({
      "@type": "CourseInstance",
      courseMode: "Onsite",
      startDate: c.dateISO,
      location: {
        "@type": "Place",
        name: c.city,
        address: { "@type": "PostalAddress", addressLocality: c.city, addressRegion: "RJ", addressCountry: "BR" },
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: faqText(f) },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <VideoSection />
      <Pains />
      <Audience />
      <Program />
      <Comparison />
      <WhyUs />
      <Testimonials />
      <Highlights />
      <Experts />
      <Offer />
      <Faq />
    </>
  );
}
