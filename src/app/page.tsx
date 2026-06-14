import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      {/* pt-16 offsets the fixed 64px navbar */}
      <div className="pt-16">
        <Hero />
      </div>
    </main>
  )
}
