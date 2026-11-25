import {
  KcciServicesHero,
  KcciCertificateIssuanceSection,
  KcciRecommendationLettersSection,
  PartnerCta,
} from "@/app/components";

export default function ServicesPage() {
  return (
    <main className="flex flex-col bg-[#FBF7F2] relative">
      <KcciServicesHero />
      <KcciCertificateIssuanceSection />
      <KcciRecommendationLettersSection />
      <PartnerCta />
    </main>
  );
}
