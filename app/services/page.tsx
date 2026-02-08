'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import {
  CheckCircle,
  FileText,
  DollarSign,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Clock,
  BarChart3,
  ArrowRight,
} from 'lucide-react'
import { motion } from 'framer-motion'

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

export default function ServicesPage() {
  const services = [
    {
      icon: FileText,
      title: 'HR & Credentialing Support',
      description: 'Complete credential management so your files are always audit-ready.',
      features: [
        'Staff onboarding & offboarding workflows',
        'License and certification tracking',
        'Background checks & fingerprint coordination',
        'Automatic expiration reminders',
        'Credentialing packet preparation',
        'Roster maintenance and updates',
        'Audit preparation and readiness',
      ],
    },
    {
      icon: DollarSign,
      title: 'Accounts Receivable (AR)',
      description: 'Transform your billing pipeline and keep cash flowing.',
      features: [
        'Claims submission and tracking',
        'Denial management and resubmissions',
        'Payment posting and reconciliation',
        'Aging reports and AR analysis',
        'Clean claim rate optimization',
        'Faster reimbursement cycles',
        'Monthly AR performance reports',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Accounts Payable (AP)',
      description: 'Streamline vendor and contractor payments.',
      features: [
        'Vendor payment processing',
        'Contractor payment management',
        'Expense tracking and coding',
        'Payroll support and reporting',
        'Financial reporting support',
        'Invoice management',
        'Cost control optimization',
      ],
    },
    {
      icon: Users,
      title: 'Service Coordination Support',
      description: 'Administrative support for your service coordination team.',
      features: [
        'Case documentation formatting',
        'Service plan assistance',
        'Scheduling support and coordination',
        'Documentation tracking',
        'Communication coordination',
        'Data entry support',
        'Follow-up management',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Case Staffing Support',
      description: 'Wraparound-specific support for case management.',
      features: [
        'Meeting scheduling coordination',
        'Case notes preparation',
        'Documentation organization',
        'Follow-up tracking',
        'Staffing packet preparation',
        'Action item management',
        'Case file organization',
      ],
    },
    {
      icon: Shield,
      title: 'Provider File Management',
      description: 'Comprehensive roster compliance management with audit-ready files.',
      features: [
        'Centralized provider file storage',
        'License and certification tracking',
        'Training record management',
        'Fingerprint & background check storage',
        'Insurance documentation management',
        'Contract file organization',
        'Automated expiration tracking',
        'Audit-ready digital organization',
      ],
    },
    {
      icon: Zap,
      title: 'Transportation Provider Support',
      description: 'Specialized support for transportation provider networks.',
      features: [
        'Driver file management',
        'Vehicle documentation tracking',
        'Insurance tracking and compliance',
        'Scheduling and coordination support',
        'Compliance documentation',
        'Background check management',
        'License tracking',
      ],
    },
  ]

  return (
    <>
      <Navbar />

      {/* Header Section */}
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
              Complete Back-Office Services
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              End-to-end support for wraparound agencies, transportation providers, behavioral health contractors, and DFCS partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-3xl p-12 shadow-lg border-2 border-[#23A6A0]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <div className="inline-flex p-4 bg-white rounded-2xl mb-6">
                      <service.icon className="w-10 h-10 text-[#2A6DB3]" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-[#2A6DB3]">{service.title}</h2>
                    <p className="text-xl text-gray-700 mb-8">{service.description}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#F7941E] hover:bg-[#E57F0F] text-white px-6 py-3 rounded-full font-semibold transition-all duration-200"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-lg font-bold text-[#2A6DB3] mb-6">What's Included:</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#2A6DB3] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                Why Choose Us
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { icon: Shield, title: 'Wraparound Specialization', desc: 'Deep expertise in the wraparound model' },
                { icon: BarChart3, title: 'DFCS & Medicaid Expertise', desc: 'Familiar with complex compliance requirements' },
                { icon: Zap, title: 'HIPAA-Aware Processes', desc: 'Patient privacy is built into every workflow' },
                { icon: Users, title: 'Nationwide Remote Support', desc: 'Available across all U.S. service areas' },
                { icon: Clock, title: 'Dedicated Account Manager', desc: 'Your team gets assigned support staff' },
                { icon: TrendingUp, title: 'Scalable Services', desc: 'Grow from 10 to 500 providers easily' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-white shadow-lg border-2 border-[#D8D8D8]"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-[#63C5EE]/20 to-[#23A6A0]/20 rounded-2xl mb-4">
                    <item.icon className="w-8 h-8 text-[#2A6DB3]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2A6DB3] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See how we can take the administrative burden off your team.
            </p>
            <Link
              href="/contact"
              className="bg-white hover:bg-[#F8F8F8] text-[#2A6DB3] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 inline-block"
            >
              Schedule a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
