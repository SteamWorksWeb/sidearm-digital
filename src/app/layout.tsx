import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sidearmdigital.com"),
  title: "Sidearm Digital | High-Performance Web Applications",
  description:
    "Premium, lightning-fast web applications and marketing sites. Custom-coded. Zero templates. Fully managed.",
  openGraph: {
    title: "Sidearm Digital | High-Performance Web Applications",
    description:
      "We build high-caliber, lightning-fast digital solutions that hit the mark. No boilerplate. Just pure performance.",
    url: "https://sidearmdigital.com",
    siteName: "Sidearm Digital",
    images: [
      {
        url: "/sidearmLogo.png",
        width: 1200,
        height: 630,
        alt: "Sidearm Digital — High-Performance Web Applications",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidearm Digital | High-Performance Web Applications",
    description:
      "We build high-caliber, lightning-fast digital solutions that hit the mark. No boilerplate. Just pure performance.",
    images: ["/sidearmLogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
