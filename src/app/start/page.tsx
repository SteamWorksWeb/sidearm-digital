import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import StartContent from '@/components/StartContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Start a Project | Sidearm Digital',
  description:
    'Submit your project scope. We partner with founders ready to scale with high-performance, custom-coded digital assets.',
  openGraph: {
    title: 'Start a Project | Sidearm Digital',
    description:
      'Submit your project scope. We partner with founders ready to scale with high-performance, custom-coded digital assets.',
    url: 'https://sidearmdigital.com/start',
    siteName: 'Sidearm Digital',
    images: [
      {
        url: '/sidearmLogo.png',
        width: 1200,
        height: 630,
        alt: 'Sidearm Digital — Start a Project',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start a Project | Sidearm Digital',
    description:
      'Submit your project scope. We partner with founders ready to scale with high-performance, custom-coded digital assets.',
    images: ['/sidearmLogo.png'],
  },
}

export default function StartPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <div className="pt-[104px]">
        <StartContent />
        <Footer />
      </div>
    </main>
  )
}
