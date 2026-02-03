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
              className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none peer placeholder-transparent"
              placeholder="Your Name"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 transform origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-valid:scale-75 peer-valid:-translate-y-6 peer-valid:text-blue-500 bg-gray-100 px-1"
            >
              Your Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none peer placeholder-transparent"
              placeholder="Email Address"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 transform origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-valid:scale-75 peer-valid:-translate-y-6 peer-valid:text-blue-500 bg-gray-100 px-1"
            >
              Email Address
            </label>
          </div>

          {/* Subject Field */}
          <div className="relative">
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none peer placeholder-transparent"
              placeholder="Your Subject"
              required
            />
            <label
              htmlFor="subject"
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 transform origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-valid:scale-75 peer-valid:-translate-y-6 peer-valid:text-blue-500 bg-gray-100 px-1"
            >
              Your Subject
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none outline-none peer placeholder-transparent"
              placeholder="Your Message"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 transform origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-valid:scale-75 peer-valid:-translate-y-6 peer-valid:text-blue-500 bg-gray-100 px-1"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 btn-gradient text-white rounded-lg font-semibold text-base transition-all transform hover:scale-105 shadow-lg"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactFormSection

