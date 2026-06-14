import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Arsenal from '@/components/Arsenal'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      {/* pt-16 offsets the fixed 64px navbar */}
      <div className="pt-16">
        <Hero />
        <Services />
        <Arsenal />
        <About />
        <Footer />
      </div>
    </main>
  )
}
