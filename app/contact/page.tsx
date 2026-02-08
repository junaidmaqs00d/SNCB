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

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setTimeout(() => {
      setSubmitSuccess(true)
      reset()
      setIsSubmitting(false)
      setTimeout(() => setSubmitSuccess(false), 4000)
    }, 1500)
  }

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#2A6DB3] via-[#23A6A0] to-[#33B86C] text-white pt-32 pb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F7941E] via-white to-[#63C5EE] bg-clip-text text-transparent">
          Book Your Discovery Call
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-xl mx-auto">
          Let’s discuss how we can support your agency.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#63C5EE] via-[#D8D8D8] to-[#33B86C] rounded-3xl p-6 md:p-12 shadow-lg border-2 border-[#23A6A0]">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Contact Information</h2>

                {[
                  { icon: Mail, label: 'Email', value: 'junaidmaqsood2211@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (800) 555-0123' },
                  { icon: MapPin, label: 'Address', value: '123 Healthcare Blvd, San Francisco, CA' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-gray-600 break-words">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>

                {submitSuccess && (
                  <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
                    Message sent successfully!
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <input
                    placeholder="Full Name"
                    {...register('name', { required: true })}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                  <input
                    placeholder="Email"
                    {...register('email', { required: true })}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                  <input
                    placeholder="Phone"
                    {...register('phone')}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    {...register('message', { required: true })}
                    className="w-full px-4 py-3 border rounded-lg"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F7941E] hover:bg-[#E57F0F] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : <>
                      <Send className="w-4 h-4" /> Send Message
                    </>}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
