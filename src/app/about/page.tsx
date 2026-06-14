import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import AboutContent from '@/components/AboutContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us | Sidearm Digital',
  description:
    '100% U.S.-based elite engineering team with over 40 years of combined experience building high-performance digital assets.',
  openGraph: {
    title: 'About Us | Sidearm Digital',
    description:
      '100% U.S.-based elite engineering team with over 40 years of combined experience building high-performance digital assets.',
    url: 'https://sidearmdigital.com/about',
    siteName: 'Sidearm Digital',
    images: [
      {
        url: '/sidearmLogo.png',
        width: 1200,
        height: 630,
        alt: 'Sidearm Digital — About Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Sidearm Digital',
    description:
      '100% U.S.-based elite engineering team with over 40 years of combined experience building high-performance digital assets.',
    images: ['/sidearmLogo.png'],
  },
}

export default function AboutPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <div className="pt-[104px]">
        <AboutContent />
        <Footer />
      </div>
    </main>
  )
}
