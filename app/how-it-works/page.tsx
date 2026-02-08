'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Users, Zap, BarChart3, Headphones } from 'lucide-react'

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

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      icon: Users,
      title: 'Discovery Call',
      description: 'We learn about your agency, services, states served, and current pain points. This helps us understand your unique needs.',
      details: ['Agency overview', 'Services and client base', 'Current workflows', 'Key challenges'],
    },
    {
      number: 2,
      icon: Zap,
      title: 'Workflow Audit',
      description: 'We review your current processes, tools, and pain points to identify where we can deliver the most impact.',
      details: ['Process documentation', 'Systems review', 'Pain point analysis', 'Opportunity assessment'],
    },
    {
      number: 3,
      icon: BarChart3,
      title: 'Setup & Integration',
      description: 'We establish communication channels, document systems, and reporting structure tailored to your needs.',
      details: ['Communication setup', 'Document systems', 'Reporting structure', 'Access configuration'],
    },
    {
      number: 4,
      icon: Headphones,
      title: 'Dedicated Support Team',
      description: 'You get assigned specialists for each function—HR, AR/AP, compliance, and coordination support.',
      details: ['Team assignment', 'Specialist expertise', 'Direct access', 'Regular check-ins'],
    },
    {
      number: 5,
      icon: CheckCircle,
      title: 'Monthly Reporting',
      description: 'Ongoing support with KPIs, AR aging reports, compliance tracking, and performance metrics delivered monthly.',
      details: ['Performance metrics', 'AR reports', 'Compliance tracking', 'Growth planning'],
    },
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2A6DB3] via-[#23A6A0] to-[#33B86C] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F7941E] via-white to-[#63C5EE] bg-clip-text text-transparent">
              How It Works
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              A simple, proven process to transform your back-office operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-3xl p-12 shadow-lg border-2 border-[#23A6A0]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-2 flex justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <step.icon className="w-12 h-12 text-[#2A6DB3]" />
                      </div>
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#F7941E] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <h2 className="text-3xl font-bold text-[#2A6DB3] mb-3">{step.title}</h2>
                    <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                  </div>

                  <div className="md:col-span-5 bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-lg font-bold text-[#2A6DB3] mb-4">This includes:</h3>
                    <ul className="space-y-3">
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#2A6DB3] flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="h-12 w-1 bg-gradient-to-b from-[#2A6DB3] to-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-3xl p-12 shadow-lg border-2 border-[#23A6A0]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2A6DB3] to-[#23A6A0] bg-clip-text text-transparent">
                What You Can Expect
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  timeline: 'Week 1-2',
                  title: 'Quick Start',
                  items: ['Initial discovery', 'Workflow audit', 'Team assignment'],
                },
                {
                  timeline: 'Week 3-4',
                  title: 'Integration',
                  items: ['System setup', 'Documentation', 'Process training'],
                },
                {
                  timeline: 'Month 2+',
                  title: 'Optimization',
                  items: ['Ongoing support', 'Monthly reports', 'Continuous improvement'],
                },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-white shadow-lg border-2 border-[#D8D8D8]"
                >
                  <div className="text-[#F7941E] font-bold text-lg mb-3">{phase.timeline}</div>
                  <h3 className="text-2xl font-bold text-[#2A6DB3] mb-4">{phase.title}</h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#2A6DB3] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2A6DB3] via-[#23A6A0] to-[#33B86C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F7941E] via-white to-[#63C5EE] bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a discovery call and see how we can transform your back-office operations.
            </p>
            <Link
              href="/contact"
              className="bg-white hover:bg-[#F8F8F8] text-[#2A6DB3] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 inline-block"
            >
              Book Your Discovery Call
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
