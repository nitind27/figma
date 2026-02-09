import { motion } from 'framer-motion'

const ContactFormSection = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Contact Us
        </h2>
        <p className="text-sm text-gray-500">Contact professionals for guidance</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3E3F95]/20 focus:border-[#3E3F95] transition-all duration-300 outline-none peer placeholder-transparent shadow-sm hover:shadow-md focus:shadow-lg"
              placeholder="Your Name"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 transform origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#3E3F95] peer-valid:scale-75 peer-valid:-translate-y-6 peer-valid:text-[#3E3F95] bg-white px-1"
            >
              Your Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3E3F95]/20 focus:border-[#3E3F95] transition-all duration-300 outline-none peer placeholder-transparent shadow-sm hover:shadow-md focus:shadow-lg"
              placeholder="Email Address"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 transform origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#3E3F95] peer-valid:scale-75 peer-valid:-translate-y-6 peer-valid:text-[#3E3F95] bg-white px-1"
            >
              Email Address
            </label>
          </div>

          {/* Subject Field */}
          <div className="relative">
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3E3F95]/20 focus:border-[#3E3F95] transition-all duration-300 outline-none peer placeholder-transparent shadow-sm hover:shadow-md focus:shadow-lg"
              placeholder="Your Subject"
              required
            />
            <label
              htmlFor="subject"
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 transform origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#3E3F95] peer-valid:scale-75 peer-valid:-translate-y-6 peer-valid:text-[#3E3F95] bg-white px-1"
            >
              Your Subject
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3E3F95]/20 focus:border-[#3E3F95] transition-all duration-300 resize-none outline-none peer placeholder-transparent shadow-sm hover:shadow-md focus:shadow-lg"
              placeholder="Your Message"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 transform origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#3E3F95] peer-valid:scale-75 peer-valid:-translate-y-6 peer-valid:text-[#3E3F95] bg-white px-1"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="group w-full px-8 py-4 bg-gradient-to-r from-[#3E3F95] to-[#2e2f75] text-white rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#3E3F95]/50 shadow-xl shadow-[#3E3F95]/30 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#2e2f75] to-[#3E3F95] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Submit
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactFormSection

