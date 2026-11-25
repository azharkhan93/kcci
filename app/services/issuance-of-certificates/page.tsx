import {
  KcciCertificateIssuanceHero,
  KcciCertificateIssuanceSection,
  PartnerCta,
} from "@/app/components";

export default function IssuanceOfCertificatesPage() {
  return (
    <main className="flex flex-col bg-[#FBF7F2] relative">
      <KcciCertificateIssuanceHero />
      <KcciCertificateIssuanceSection />
      <PartnerCta />
    </main>
  );
}
