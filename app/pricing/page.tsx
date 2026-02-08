'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
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

export default function PricingPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F7941E] via-white to-[#63C5EE] bg-clip-text text-transparent">Simple, Transparent Pricing</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Choose the plan that fits your organization's needs - for healthcare, retail, hospitality, and beyond
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
    <section className="py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg border-2 border-[#23A6A0]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
      >
        {[
          {
            name: 'Starter',
            price: '$299',
            period: '/month',
            description: 'Perfect for small practices',
            users: 'Up to 5 users',
            features: [
              'Up to 500 invoices/month',
              'Basic analytics',
              'Email support',
              'Standard integrations',
              'HIPAA compliant',
            ],
            cta: 'Start Free Trial',
            highlighted: false,
          },
          {
            name: 'Professional',
            price: '$999',
            period: '/month',
            description: 'Best for growing providers',
            users: 'Up to 25 users',
            features: [
              'Up to 5,000 invoices/month',
              'Advanced analytics',
              'Priority support',
              'Custom integrations',
              'HIPAA compliant',
              'Denial management',
              'Multi-location support',
            ],
            cta: 'Start Free Trial',
            highlighted: true,
          },
          {
            name: 'Enterprise',
            price: 'Custom',
            period: '/month',
            description: 'For large healthcare systems',
            users: 'Unlimited users',
            features: [
              'Unlimited invoices',
              'Custom analytics',
              '24/7 dedicated support',
              'Custom development',
              'HIPAA + compliance',
              'Denial management',
              'Multi-location support',
              'Custom workflows',
            ],
            cta: 'Contact Sales',
            highlighted: false,
          },
        ].map((plan, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={`rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 ${
              plan.highlighted
                ? 'border-[#F7941E] bg-gradient-to-br from-white to-[#FFF9F0] shadow-2xl md:scale-105'
                : 'border-[#D8D8D8] bg-white hover:shadow-xl'
            }`}
          >
            <div className="p-5 sm:p-6 lg:p-8">
              {plan.highlighted && (
                <div className="bg-[#F7941E] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 inline-block">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">{plan.description}</p>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">{plan.price}</span>
                <span className="text-gray-600 text-base sm:text-lg">{plan.period}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6">{plan.users}</p>
              <Link
                href="/contact"
                className={`block w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-full font-semibold text-center transition-all text-sm sm:text-base ${
                  plan.highlighted
                    ? 'bg-[#F7941E] hover:bg-[#E57F0F] text-white'
                    : 'border-2 border-[#2A6DB3] text-[#2A6DB3] hover:bg-[#2A6DB3] hover:text-white'
                }`}
              >
                {plan.cta}
              </Link>
              <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>
      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-3xl p-12 shadow-lg border-2 border-[#23A6A0]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2A6DB3] to-[#23A6A0] bg-clip-text text-transparent">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                q: 'Can I change my plan anytime?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Absolutely! All plans come with a 14-day free trial. No credit card required to get started.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers.',
              },
              {
                q: 'Do you offer volume discounts?',
                a: 'Yes! We offer volume discounts for larger organizations processing more invoices monthly. Contact sales for details.',
              },
              {
                q: 'What support is included?',
                a: 'All plans include email support. Professional and Enterprise plans include priority and 24/7 support respectively.',
              },
              {
                q: 'Can I integrate with my EHR system?',
                a: 'Yes! We offer integrations with major EHR systems including Epic, Cerner, and Athena on Professional and Enterprise plans.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 rounded-3xl bg-white shadow-lg border-2 border-[#D8D8D8] hover:shadow-xl transition-all cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
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
              Start Your Free Trial Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              No credit card required. Full access to all features for 14 days.
            </p>
            <Link
              href="/contact"
              className="bg-white hover:bg-[#F8F8F8] text-[#2A6DB3] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 inline-block"
            >
              Get Started Free
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
