import type { Metadata } from "next";
import { Michroma, Space_Grotesk, Titillium_Web } from "next/font/google";
import { Navbar, Footer } from "@/app/components";
import "./globals.css";

const michroma = Michroma({
  variable: "--font-michroma",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
  title: "Remote Sensing and GIS | Soil Science Lab",
  description:
    "Remote Sensing and GIS - Division of Soil Science & Agricultural Chemistry, SKUAST-K Kashmir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${michroma.variable} ${spaceGrotesk.variable} ${titilliumWeb.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Michroma&family=Space+Grotesk:wght@300..700&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={spaceGrotesk.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
