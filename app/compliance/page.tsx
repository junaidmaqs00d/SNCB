'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Lock, CheckCircle, Eye, Key, FileText, AlertCircle, Users } from 'lucide-react'

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

export default function CompliancePage() {
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
              Compliance & Security
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Built for healthcare. Trusted by DFCS agencies, Medicaid providers, and wraparound specialists nationwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Security Section */}
<section className="py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg border-2 border-[#23A6A0]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2A6DB3] to-[#23A6A0] bg-clip-text text-transparent">
          Data Security Standards
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        {[
          {
            icon: Lock,
            title: 'HIPAA-Aware Workflows',
            features: [
              'All processes designed for healthcare',
              'Protected health information (PHI) handling',
              'Minimum necessary access principles',
              'Regular HIPAA training for all staff',
            ],
          },
          {
            icon: FileText,
            title: 'Secure Document Storage',
            features: [
              'Encrypted data storage',
              '256-bit encryption standard',
              'Secure file transmission',
              'Redundant backup systems',
            ],
          },
          {
            icon: Key,
            title: 'Access Control',
            features: [
              'Role-based access control (RBAC)',
              'Multi-factor authentication',
              'Audit logging for all access',
              'User permission management',
            ],
          },
          {
            icon: Eye,
            title: 'Confidentiality Agreements',
            features: [
              'All staff sign NDAs',
              'Strict confidentiality policies',
              'Employee background checks',
              'Compliance verification',
            ],
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg border-2 border-[#D8D8D8]"
          >
            <div className="inline-flex p-3 sm:p-4 bg-gradient-to-br from-[#63C5EE]/20 to-[#23A6A0]/20 rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
              <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#2A6DB3]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#2A6DB3] mb-3 sm:mb-4">
              {item.title}
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {item.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#2A6DB3] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>
      {/* Compliance Focus Section */}
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
                Compliance Expertise
              </h2>
              <p className="text-xl text-gray-700">We specialize in complex regulatory environments</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { title: 'Medicaid Familiarity', desc: 'Deep knowledge of state and federal Medicaid requirements' },
                { title: 'DFCS Environment', desc: 'Experienced with Department of Family & Children Services workflows' },
                { title: 'Audit Preparation', desc: 'Help agencies pass audits with zero findings' },
                { title: 'Documentation Standards', desc: 'All documentation meets regulatory requirements' },
                { title: 'Provider File Management', desc: 'Audit-ready provider files and compliance tracking' },
                { title: 'Regulatory Updates', desc: 'Stay current with changing compliance rules' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-6 rounded-3xl bg-white shadow-lg border-2 border-[#D8D8D8]"
                >
                  <h3 className="text-lg font-bold text-[#2A6DB3] mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Confidentiality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-3xl p-12 shadow-lg border-2 border-[#23A6A0]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex p-4 bg-white rounded-2xl mb-6">
                  <Shield className="w-10 h-10 text-[#2A6DB3]" />
                </div>
                <h2 className="text-4xl font-bold text-[#2A6DB3] mb-6">Data Protection Policies</h2>
                <p className="text-xl text-gray-700 mb-8">
                  Your data is our responsibility. We maintain strict policies and procedures to ensure all client information remains confidential and secure.
                </p>
                <ul className="space-y-4">
                  {[
                    'Data retention policies compliant with regulations',
                    'Secure data destruction procedures',
                    'Limited employee access to sensitive data',
                    'Regular security audits and updates',
                    'Disaster recovery and business continuity',
                    'Incident response procedures',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2A6DB3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex p-4 bg-white rounded-2xl mb-6">
                  <AlertCircle className="w-10 h-10 text-[#2A6DB3]" />
                </div>
                <h2 className="text-4xl font-bold text-[#2A6DB3] mb-6">Secure Communication</h2>
                <p className="text-xl text-gray-700 mb-8">
                  All communication channels for sensitive information use HIPAA-compliant tools and encrypted connections.
                </p>
                <ul className="space-y-4">
                  {[
                    'HIPAA-compliant messaging platforms',
                    'End-to-end encrypted communications',
                    'Secure file transfer protocols',
                    'No PHI in emails or insecure channels',
                    'Regular security awareness training',
                    'Confidentiality reminder policies',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2A6DB3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
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
                Why Agencies Trust Us
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
                {
                  icon: Users,
                  title: 'Industry Specialists',
                  desc: 'Our team has deep experience in wraparound and DFCS environments',
                },
                {
                  icon: FileText,
                  title: 'Proven Track Record',
                  desc: 'Helping agencies pass audits with zero findings year after year',
                },
                {
                  icon: Lock,
                  title: 'Security First',
                  desc: 'Every process and workflow is designed with security and compliance in mind',
                },
                {
                  icon: CheckCircle,
                  title: 'Regular Training',
                  desc: 'All staff undergo continuous compliance and security training',
                },
                {
                  icon: Eye,
                  title: 'Transparency',
                  desc: 'Clear policies and procedures you can review and audit anytime',
                },
                {
                  icon: Shield,
                  title: 'Dedicated Support',
                  desc: 'Your success and compliance is our priority',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-white shadow-lg border-2 border-[#D8D8D8]"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-[#63C5EE]/20 to-[#23A6A0]/20 rounded-2xl mb-4">
                    <item.icon className="w-8 h-8 text-[#2A6DB3]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2A6DB3] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
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
              Rest Easy Knowing You're Compliant
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us handle the compliance burden while you focus on services.
            </p>
            <Link
              href="/contact"
              className="bg-white hover:bg-[#F8F8F8] text-[#2A6DB3] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 inline-block"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
