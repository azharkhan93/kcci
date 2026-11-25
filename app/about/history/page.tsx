import {
  KcciHistoryHero,
  KcciHeritagePoetryBand,
  KcciHistoryTimeline,
  KcciMandatePillars,
  PartnerCta,
} from "@/app/components";

export default function OurHistoryPage() {
  return (
    <main className="flex flex-col bg-[#FBF7F2] relative">
      <KcciHistoryHero />
      <KcciHeritagePoetryBand />
      <KcciHistoryTimeline />
      <KcciMandatePillars />
      <PartnerCta />
    </main>
  );
}
