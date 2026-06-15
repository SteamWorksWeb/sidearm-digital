'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-zinc-950/90 border-b border-zinc-800/80 shadow-lg shadow-black/20'
          : 'backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/50'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <Image
            src="/sidearmLogo.png"
            alt="Sidearm Digital"
            width={280}
            height={80}
            priority
            className="h-16 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-200"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-blue-400 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/start"
              className="ml-2 px-4 py-2 rounded-md text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors duration-200 shadow-md shadow-blue-900/30"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors duration-200"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-zinc-800/50">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-zinc-400 hover:text-blue-400 transition-colors duration-200 py-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/start"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-1 px-4 py-2 rounded-md text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors duration-200"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
