import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Navbar, Footer } from "@/app/components";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farm2i | Precision Agriculture",
  description:
    "Farm2i — Explore the powerful capabilities of farm2i and discover how our technology transforms modern farming practices.",
  icons: {
    icon: "/farm2i.svg",
    shortcut: "/farm2i.svg",
    apple: "/farm2i.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.variable}>
      <head>
        <link rel="icon" href="/farm2i.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${quicksand.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
