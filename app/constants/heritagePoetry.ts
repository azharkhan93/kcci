export interface HeritagePoetryMaskItem {
  id: string;
  maskedDisplayWord: string;
  poetryLines: string[];
  title: string;
  translation: string;
  attribution: string;
  displayMaskImage: string;
  poetryMaskImage: string;
  imagePosition?: string;
}

export const HERITAGE_POETRY_MASK_ITEMS: HeritagePoetryMaskItem[] = [
  {
    id: "kashmir-heritage-gulshan",
    maskedDisplayWord: "کَشِیٖر",
    poetryLines: [
      "بُلبُل وَنان چُھ پۄشَن — گُلشَن وَطَن چُھ سۄنُے",
      "وۄلو ہا باغوانو نَو بَہارُک شان پَیدا کَر",
    ],
    title: "Kashmir Heritage",
    translation:
      "A blooming garden is our homeland — come awaken the glory of spring.",
    attribution: "Mahjoor • Est. 1924",
    displayMaskImage: "/hero/autum1.webp",
    poetryMaskImage: "/hero/img6.jpg",
    imagePosition: "center 45%",
  },
  {
    id: "kashmir-handicrafts-dastkari",
    maskedDisplayWord: "دَستکٲری",
    poetryLines: [
      "تارِ پَشمیٖنہٕ تہٕ کٲنی ہُنٛد ہُنَر چُھ لازَوال",
      "کٲشِر کٲریگَرَن ہٕنٛدؠ اَتھہٕ چھِ وُنان گُلاب",
    ],
    title: "Kashmiri Handicrafts",
    translation:
      "Timeless Pashmina threads & Kani looms — artisan hands weave roses.",
    attribution: "Pashmina, Sozni & Kani",
    displayMaskImage: "/sectors/kashmir-handicrafts.jpg",
    poetryMaskImage: "/sectors/kashmir-handicrafts.jpg",
    imagePosition: "center center",
  },
];
