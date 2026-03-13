import Link from 'next/link'
import { Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-[#2A6DB3] via-[#23A6A0] to-[#33B86C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Company Info */}
          <div className="max-w-sm">
            <h3 className="text-2xl font-bold mb-4">SWIFT n CLEAR Billing</h3>

            <p className="text-sm text-white/80 mb-5 leading-relaxed">
              Back-office support for wraparound agencies nationwide.
            </p>

            <div className="flex gap-4">
              <a href="#">
                <Linkedin className="w-5 h-5 hover:text-[#F7941E] transition" />
              </a>

              <a href="#">
                <Twitter className="w-5 h-5 hover:text-[#F7941E] transition" />
              </a>

              <a href="#">
                <Facebook className="w-5 h-5 hover:text-[#F7941E] transition" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>

            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/services" className="hover:text-white">
                  All Services
                </Link>
              </li>

              <li>
                <Link href="/how-it-works" className="hover:text-white">
                  How It Works
                </Link>
              </li>

              <li>
                <Link href="/compliance" className="hover:text-white">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>

            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/80">

            <p className="text-center md:text-left">
              © {currentYear} SWIFT n CLEAR. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">

              <a
                href="mailto:Admin@swiftnclearbilling.biz"
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="w-4 h-4" />
                Admin@swiftnclearbilling.biz
              </a>

              <a
                href="tel:+14063087467"
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="w-4 h-4" />
                +1 406-308-7467
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}