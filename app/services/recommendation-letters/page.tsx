import {
  KcciRecommendationLettersHero,
  KcciRecommendationLettersSection,
  PartnerCta,
} from "@/app/components";

export default function RecommendationLettersPage() {
  return (
    <main className="flex flex-col bg-[#FBF7F2] relative">
      <KcciRecommendationLettersHero />
      <KcciRecommendationLettersSection />
      <PartnerCta />
    </main>
  );
}
