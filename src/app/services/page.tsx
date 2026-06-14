import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ServicesContent from '@/components/ServicesContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Elite Digital Services | Sidearm Digital',
  description:
    'Custom Next.js web applications, mobile development, and our flagship Zero-Maintenance Retainer.',
  openGraph: {
    title: 'Elite Digital Services | Sidearm Digital',
    description:
      'Custom Next.js web applications, mobile development, and our flagship Zero-Maintenance Retainer.',
    url: 'https://sidearmdigital.com/services',
    siteName: 'Sidearm Digital',
    images: [
      {
        url: '/sidearmLogo.png',
        width: 1200,
        height: 630,
        alt: 'Sidearm Digital — Elite Digital Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Digital Services | Sidearm Digital',
    description:
      'Custom Next.js web applications, mobile development, and our flagship Zero-Maintenance Retainer.',
    images: ['/sidearmLogo.png'],
  },
}

export default function ServicesPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <div className="pt-[104px]">
        <ServicesContent />
        <Footer />
      </div>
    </main>
  )
}
