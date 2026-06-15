import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      {/* pt-16 offsets the fixed 64px navbar */}
      <div className="pt-[104px]">
        <Hero />
        <Services />
        <Process />
        <About />
        <TechStack />
        <CallToAction />
        <Footer />
      </div>
    </main>
  )
}
