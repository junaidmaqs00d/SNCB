'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Users, Lightbulb } from 'lucide-react'

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

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#2A6DB3] via-[#23A6A0] to-[#33B86C] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F7941E] via-white to-[#63C5EE] bg-clip-text text-transparent">About Us</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We run the back office so wraparound agencies can focus on what matters—helping clients and families succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description:
                  'We are committed to transforming wraparound agencies by providing world-class back-office support, enabling leaders to focus on direct services and client outcomes.',
              },
              {
                icon: Lightbulb,
                title: 'Our Vision',
                description:
                  'To be the trusted back-office partner for wraparound agencies across the U.S., known for excellence in compliance, efficiency, and industry expertise.',
              },
              {
                icon: Users,
                title: 'Our Values',
                description:
                  'Industry specialization, integrity, excellence, and partnership guide everything we do. Your success is our success.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-3xl border-2 border-[#23A6A0] text-center shadow-lg"
              >
                <div className="inline-flex p-4 bg-white rounded-2xl mb-6">
                  <item.icon className="w-10 h-10 text-[#2A6DB3]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2A6DB3] mb-4">{item.title}</h3>
                <p className="text-gray-700 text-lg">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-3xl p-12 shadow-lg border-2 border-[#23A6A0]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2A6DB3] to-[#23A6A0] bg-clip-text text-transparent">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experienced healthcare and technology professionals dedicated to your success
              </p>
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
                  name: 'Ayan Khatak',
                  role: 'CEO & Co-Founder',
                  bio: 'Former healthcare CTO with 8+ years in revenue cycle management',
                },
                {
                  name: 'Rabail',
                  role: 'COO & Co-Founder',
                  bio: 'Healthcare operations expert and compliance specialist',
                },
                {
                  name: 'Naba Nadeem',
                  role: 'CTO & Co-Founder',
                  bio: 'Full-stack engineer passionate about healthcare technology',
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-8 bg-white rounded-3xl border-2 border-[#D8D8D8] text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#2A6DB3] to-[#23A6A0] rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-3xl p-12 shadow-lg border-2 border-[#23A6A0]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2A6DB3] to-[#23A6A0] bg-clip-text text-transparent">Our Journey</h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  year: '2018',
                  title: 'Founded',
                  description: 'SNCB launched with a mission to revolutionize healthcare billing',
                },
                {
                  year: '2019',
                  title: 'First 100 Providers',
                  description: 'Reached 100 healthcare organizations using our platform',
                },
                {
                  year: '2021',
                  title: 'Series A Funding',
                  description: 'Secured $10M in Series A funding to accelerate growth',
                },
                {
                  year: '2023',
                  title: '500 Provider Milestone',
                  description: 'Now serving 500+ healthcare providers across the nation',
                },
                {
                  year: '2024',
                  title: 'International Expansion',
                  description: 'Launched multi-currency support and international billing features',
                },
              ].map((event, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex gap-8"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {event.year.slice(-2)}
                    </div>
                    {i < 4 && <div className="w-1 h-24 bg-primary mt-4" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-lg">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
