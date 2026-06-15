import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

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
  title: "Sidearm Digital | Premium Digital Engineering",
  description:
    "Built for industry leaders who expect excellence. Custom websites, applications, and automations — precision-engineered, white-glove service from start to finish.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sidearm Digital | Premium Digital Engineering",
    description:
      "Built for industry leaders who expect excellence. Custom websites, applications, and automations — precision-engineered, white-glove service from start to finish.",
    url: "https://sidearmdigital.com",
    siteName: "Sidearm Digital",
    images: [
      {
        url: "/social.jpg",
        width: 1200,
        height: 630,
        alt: "Sidearm Digital — Premium Digital Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidearm Digital | Premium Digital Engineering",
    description:
      "Built for industry leaders who expect excellence. Custom websites, applications, and automations — precision-engineered, white-glove service from start to finish.",
    images: ["/social.jpg"],
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
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
