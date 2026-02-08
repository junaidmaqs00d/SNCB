'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 bg-white bg-opacity-95 backdrop-blur-md rounded-full px-6 shadow-lg border border-white border-opacity-40">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="SWIFT n CLEAR Logo"
              width={40}
              height={40}
              priority
              className="h-10 w-auto"
            />
            <span className="hidden sm:inline text-lg font-bold bg-gradient-to-r from-[#2A6DB3] to-[#23A6A0] bg-clip-text text-transparent">SNCB</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="border-2 border-[#2A6DB3] text-[#2A6DB3] hover:bg-[#2A6DB3] hover:text-white px-6 py-1.5 rounded-full font-medium transition-all duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="bg-[#F7941E] hover:bg-[#E57F0F] text-white px-6 py-1.5 rounded-full font-medium transition-all duration-200 hover:scale-105"
            >
              Contact sales
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-accent hover:bg-orange-600 text-accent-foreground px-4 py-2 rounded-full font-medium transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
