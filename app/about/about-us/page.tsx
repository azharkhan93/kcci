import {
  KcciAboutHero,
  KcciHeritagePoetryBand,
  KcciObjectivesSection,
  KcciMandatePillars,
  PartnerCta,
} from "@/app/components";

export default function AboutUsPage() {
  return (
    <main className="flex flex-col bg-[#FBF7F2] relative">
      <KcciAboutHero />
      <KcciHeritagePoetryBand />
      <KcciObjectivesSection />
      <KcciMandatePillars />
      <PartnerCta />
    </main>
  );
}
