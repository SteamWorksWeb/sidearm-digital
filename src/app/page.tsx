import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950">
      <Image
        src="/sidearmLogo.png"
        alt="Sidearm Digital"
        width={400}
        height={200}
        priority
        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
    </main>
  );
}
