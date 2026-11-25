import {
  KcciGalleryHero,
  KcciSummitsGallery,
  KcciHeritageGallery,
  PartnerCta,
} from "@/app/components";

export default function OurGalleryPage() {
  return (
    <main className="flex flex-col bg-[#FBF7F2] relative">
      <KcciGalleryHero />
      <KcciSummitsGallery />
      <KcciHeritageGallery />
      <PartnerCta />
    </main>
  );
}
