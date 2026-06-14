import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ProcessContent from '@/components/ProcessContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Methodology | Sidearm Digital',
  description:
    'The 7-step engineering-led process we use to build lightning-fast web apps and eliminate scope creep.',
  openGraph: {
    title: 'Our Methodology | Sidearm Digital',
    description:
      'The 7-step engineering-led process we use to build lightning-fast web apps and eliminate scope creep.',
    url: 'https://sidearmdigital.com/process',
    siteName: 'Sidearm Digital',
    images: [
      {
        url: '/sidearmLogo.png',
        width: 1200,
        height: 630,
        alt: 'Sidearm Digital — Our Methodology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Methodology | Sidearm Digital',
    description:
      'The 7-step engineering-led process we use to build lightning-fast web apps and eliminate scope creep.',
    images: ['/sidearmLogo.png'],
  },
}

export default function ProcessPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <div className="pt-[104px]">
        <ProcessContent />
        <Footer />
      </div>
    </main>
  )
}
