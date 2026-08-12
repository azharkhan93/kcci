import type { Metadata } from "next";
import { Space_Grotesk, Titillium_Web } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKUAST-K Soil Testing Laboratory",
  description:
    "Division of Soil Science & Agricultural Chemistry, SKUAST-K Kashmir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${titilliumWeb.variable}`}
    >
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
