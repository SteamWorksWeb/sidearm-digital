import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ContactContent from '@/components/ContactContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact | Sidearm Digital',
  description:
    'Have a question or need technical guidance? Get in touch with our U.S.-based team. We respond to every message personally within 24 hours.',
  openGraph: {
    title: 'Contact | Sidearm Digital',
    description:
      'Have a question or need technical guidance? Get in touch with our U.S.-based team. We respond to every message personally within 24 hours.',
    url: 'https://sidearmdigital.com/contact',
    siteName: 'Sidearm Digital',
    images: [
      {
        url: '/sidearmLogo.png',
        width: 1200,
        height: 630,
        alt: 'Sidearm Digital — Contact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Sidearm Digital',
    description:
      'Have a question or need technical guidance? Get in touch with our U.S.-based team. We respond to every message personally within 24 hours.',
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
