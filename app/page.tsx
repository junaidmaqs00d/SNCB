'use client'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle,
  BarChart3,
  Shield,
  Zap,
  Users,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Cpu,
  Lock,
  FileText,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress === 1) clearInterval(timer)
    }, 50)
    return () => clearInterval(timer)
  }, [target, duration])
  return <span>{count.toLocaleString()}</span>
}

function LogoCarousel() {
  const sectionLogos = [
    { src: '/logo1.webp', alt: 'Partner 1' },
    { src: '/logo2.webp', alt: 'Partner 2' },
    { src: '/logo3.webp', alt: 'Partner 3' },
    { src: '/logo4.webp', alt: 'Partner 4' },
    { src: '/logo5.webp', alt: 'Partner 5' },
    { src: '/logo6.webp', alt: 'Partner 6' },
  ]

  return (
    <div className="w-full py-8 sm:py-12 bg-white/50 backdrop-blur rounded-2xl sm:rounded-3xl overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="marquee-scroll flex items-center gap-8 sm:gap-12 px-4">
          {[...sectionLogos, ...sectionLogos, ...sectionLogos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 flex flex-col items-center gap-2 sm:gap-3">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-300 to-teal-200 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain p-2 sm:p-3"
                />
              </div>
              {/* If you want labels → uncomment */}
              {/* <p className="text-xs font-medium text-foreground text-center whitespace-nowrap">{logo.alt}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="min-h-[70vh] sm:min-h-[85vh] md:min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A6DB3]/75 via-[#23A6A0]/65 to-[#2A6DB3]/75" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-block mb-5 sm:mb-6 px-5 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
              <p className="text-xs sm:text-sm text-white font-semibold">Trusted by Wraparound Agencies Nationwide</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-6 leading-tight bg-gradient-to-r from-[#F7941E] via-white to-[#63C5EE] bg-clip-text text-transparent">
              We Run the Back Office.<br className="sm:hidden" /> You Run the Services.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Back-office support for wraparound agencies, transportation providers, behavioral health, and DFCS contractors across the U.S.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-[#F7941E] hover:bg-[#E57F0F] text-white px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all hover:scale-105 inline-block"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2A6DB3] px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all inline-block"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#2A6DB3] to-[#23A6A0] bg-clip-text text-transparent">
            Industry Expertise
          </p>
          <LogoCarousel />
        </div>
      </section>

      {/* Services Overview Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border-2 border-[#23A6A0]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#2A6DB3] to-[#23A6A0] bg-clip-text text-transparent">
                Our Back-Office Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Comprehensive support so you can focus on services
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                { icon: FileText, title: 'HR & Credentialing', desc: 'License tracking, background checks, onboarding' },
                { icon: DollarSign, title: 'Accounts Receivable', desc: 'Claims submission, tracking, denial management' },
                { icon: TrendingUp, title: 'Accounts Payable', desc: 'Vendor payments, expense tracking, reporting' },
                { icon: Users, title: 'Service Coordination', desc: 'Case documentation, scheduling, coordination' },
                { icon: CheckCircle, title: 'Case Staffing Support', desc: 'Meeting prep, notes, follow-up tracking' },
                { icon: Shield, title: 'Provider File Management', desc: 'Audit-ready files, compliance tracking' },
                { icon: Zap, title: 'Transportation Admin', desc: 'Driver files, vehicle docs, scheduling' },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg border border-[#D8D8D8] hover:border-[#2A6DB3] hover:shadow-xl transition-all group"
                >
                  <div className="inline-flex p-3 bg-gradient-to-br from-[#63C5EE]/20 to-[#23A6A0]/20 rounded-xl mb-4 group-hover:shadow-md transition-all">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#2A6DB3]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{service.desc}</p>
                  <Link
                    href="/services"
                    className="text-[#2A6DB3] hover:text-[#1A4A8A] font-medium text-sm sm:text-base flex items-center gap-2 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Pain Points */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border-2 border-[#23A6A0]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#2A6DB3] to-[#23A6A0] bg-clip-text text-transparent">
                We Solve Your Back-Office Challenges
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Common problems we help wraparound agencies overcome
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
            >
              {[
                { title: 'Billing Delays & AR Backlog', desc: 'Claims stuck in processing — we streamline it' },
                { title: 'Credentialing Stress', desc: 'License tracking and compliance anxiety — handled' },
                { title: 'Staff Turnover Chaos', desc: 'Paperwork nightmare when staff changes — we manage it' },
                { title: 'DFCS/Medicaid Pressure', desc: 'Complex documentation requirements — we know them' },
                { title: 'Roster & Fingerprint Tracking', desc: 'Expiration alerts and audit readiness — automatic' },
                { title: 'Admin Workload Killing Growth', desc: 'Your team drowning in paperwork — not anymore' },
              ].map((problem, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-5 sm:p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all border border-[#D8D8D8]"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-[#2A6DB3] mb-2">{problem.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{problem.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section – improved mobile readability */}
<section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-[#23A6A0]/80">
      {/* Video wrapper – taller on mobile for more text space */}
      <div className="relative w-full pb-[100%] xs:pb-[90%] sm:pb-[70%] md:pb-[56.25%] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Keep your original gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A6DB3]/65 via-[#23A6A0]/55 to-[#33B86C]/65" />

      {/* Text overlay with more vertical padding */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center px-5 sm:px-8 md:px-12 text-center"
      >
        <div className="
          w-full max-w-[95%] sm:max-w-[90%] md:max-w-3xl lg:max-w-4xl
          bg-white/20 backdrop-blur-md 
          rounded-2xl sm:rounded-3xl
          p-8 sm:p-10 md:p-12 lg:p-14           /* ← increased vertical padding */
          border border-white/30
          shadow-xl
          flex flex-col items-center justify-center gap-5 sm:gap-6 md:gap-8
        ">
          <h2 className="
            text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-5xl 
            font-bold mb-5 sm:mb-6 md:mb-8
            bg-gradient-to-r from-[#2A6DB3] to-[#23A6A0] 
            bg-clip-text text-transparent leading-tight
          ">
            Your billing chaos<br className="sm:hidden" /> ends here.
          </h2>

          <p className="
            text-base sm:text-lg md:text-xl 
            text-white/95 leading-relaxed 
            mb-4 sm:mb-6 md:mb-8
          ">
            We provide end-to-end billing solutions to state providers so you can focus only on care.
          </p>

        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border-2 border-[#23A6A0]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                { icon: Users, label: 'Agencies Supported', value: 150 },
                { icon: DollarSign, label: 'Claims Processed Monthly', value: 50000 },
                { icon: TrendingUp, label: 'Avg AR Reduction', value: 40 },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all border border-[#D8D8D8]"
                >
                  <div className="inline-block p-3 sm:p-4 bg-gradient-to-br from-[#63C5EE]/20 to-[#23A6A0]/20 rounded-full mb-3 sm:mb-4">
                    <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#2A6DB3]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#2A6DB3] to-[#23A6A0] bg-clip-text text-transparent mb-1 sm:mb-2">
                    <CountUp target={stat.value} />
                    {stat.label.includes('Reduction') && '%'}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border-2 border-[#23A6A0]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#2A6DB3] to-[#23A6A0] bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Real results from organizations that trust us with their billing & compliance
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                {
                  name: "Jennifer Martinez",
                  role: "Executive Director, Wraparound Agency",
                  quote: "Reduced our AR backlog by 40% and freed up our team to focus on providing services to families.",
                },
                {
                  name: "David Thompson",
                  role: "Operations Manager, Behavioral Health",
                  quote: "The credentialing and compliance support is exactly what we needed for DFCS environments.",
                },
                {
                  name: "Lisa Chen",
                  role: "Finance Director, Transportation Network",
                  quote: "Outstanding support for our unique compliance needs. We passed our audit with zero findings.",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="relative p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur border border-white/60 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-1 mb-4 sm:mb-5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-[#F7941E] text-base sm:text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 italic leading-relaxed relative flex-grow">
                    <span className="absolute -top-3 -left-1 sm:-top-4 sm:-left-2 text-5xl sm:text-6xl text-[#23A6A0]/20 font-serif">“</span>
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#2A6DB3] to-[#23A6A0] rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md flex-shrink-0">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#2A6DB3] via-[#23A6A0] to-[#33B86C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#F7941E] via-white to-[#63C5EE] bg-clip-text text-transparent leading-tight">
              Ready to Reduce Admin Overhead?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
              Join 150+ wraparound agencies nationwide who trust us to run their back office so they can focus on services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-[#F8F8F8] text-[#2A6DB3] px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all hover:scale-105 inline-block"
              >
                Book a Consultation
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2A6DB3] px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all inline-block"
              >
                Get Pricing Proposal
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}