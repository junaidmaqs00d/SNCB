'use client'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

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

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setSubmitSuccess(true)
        reset()
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />

      {/* ================= HEADER ================= */}
      <section className="bg-gradient-to-r from-[#2A6DB3] via-[#23A6A0] to-[#33B86C] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F7941E] via-white to-[#63C5EE] bg-clip-text text-transparent">
              Book Your Discovery Call
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help your wraparound agency scale and succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg border-2 border-[#23A6A0]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
              {/* ========= CONTACT INFO ========= */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6 bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left"
                >
                  Contact Information
                </motion.h2>

                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'info@swiftncclear.com',
                    href: 'mailto:info@swiftncclear.com',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+1 (800) 555-0123',
                    href: 'tel:+18005550123',
                  },
                  {
                    icon: MapPin,
                    label: 'Address',
                    value: '123 Healthcare Blvd, San Francisco, CA 94105',
                    href: '#',
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    variants={itemVariants}
                    href={item.href}
                    className="flex items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:bg-opacity-20">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-base sm:text-lg mb-0.5 sm:mb-1">{item.label}</h3>
                      <p className="text-gray-600 text-sm sm:text-base break-words hyphens-auto">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}

                <motion.div
                  variants={itemVariants}
                  className="p-5 sm:p-6 bg-secondary rounded-lg border text-sm sm:text-base"
                >
                  <h3 className="font-semibold mb-3 sm:mb-4">Business Hours</h3>
                  <p className="text-gray-600">
                    Mon – Fri: 8:00 AM – 6:00 PM PST<br />
                    Sat – Sun: 10:00 AM – 4:00 PM PST
                  </p>
                </motion.div>
              </motion.div>

              {/* ========= CONTACT FORM ========= */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg"
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                  Send us a Message
                </h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 text-sm sm:text-base">
                    Thank you! We'll get back to you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
                  <input
                    placeholder="Full Name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border rounded-lg text-sm sm:text-base"
                  />
                  {errors.name && <p className="text-red-500 text-xs sm:text-sm">{errors.name.message}</p>}

                  <input
                    placeholder="Email Address"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full px-4 py-3 border rounded-lg text-sm sm:text-base"
                  />
                  {errors.email && <p className="text-red-500 text-xs sm:text-sm">{errors.email.message}</p>}

                  <input
                    placeholder="Phone Number"
                    {...register('phone')}
                    className="w-full px-4 py-3 border rounded-lg text-sm sm:text-base"
                  />

                  <input
                    placeholder="Healthcare Organization"
                    {...register('company')}
                    className="w-full px-4 py-3 border rounded-lg text-sm sm:text-base"
                  />

                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help..."
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 border rounded-lg resize-none text-sm sm:text-base"
                  />
                  {errors.message && <p className="text-red-500 text-xs sm:text-sm">{errors.message.message}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F7941E] hover:bg-[#E57F0F] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {isSubmitting ? 'Sending...' : <>
                      <Send className="w-4 h-4" /> Send Message
                    </>}
                  </button>
                </form>

                <p className="text-xs sm:text-sm text-gray-600 mt-4">
                  We respect your privacy. Your information will only be used to respond to your inquiry.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}