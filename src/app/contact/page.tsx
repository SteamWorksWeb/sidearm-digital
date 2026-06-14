import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ContactContent from '@/components/ContactContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Initiate Project | Sidearm Digital',
  description:
    'Stop burning capital on bloated templates. Let\'s architect a custom, high-performance solution.',
  openGraph: {
    title: 'Initiate Project | Sidearm Digital',
    description:
      'Stop burning capital on bloated templates. Let\'s architect a custom, high-performance solution.',
    url: 'https://sidearmdigital.com/contact',
    siteName: 'Sidearm Digital',
    images: [
      {
        url: '/sidearmLogo.png',
        width: 1200,
        height: 630,
        alt: 'Sidearm Digital — Initiate Project',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Initiate Project | Sidearm Digital',
    description:
      'Stop burning capital on bloated templates. Let\'s architect a custom, high-performance solution.',
    images: ['/sidearmLogo.png'],
  },
}

export default function ContactPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <div className="pt-[104px]">
        <ContactContent />
        <Footer />
      </div>
    </main>
  )
}
