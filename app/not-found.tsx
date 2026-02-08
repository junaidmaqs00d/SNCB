import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-background px-4 py-20">
        <div className="text-center max-w-2xl">
          <div className="flex justify-center mb-8">
            <AlertCircle className="w-24 h-24 text-accent opacity-80" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">404</h1>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>

          <p className="text-xl text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-primary hover:bg-blue-700 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 inline-block"
            >
              Go to Home
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 inline-block"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
