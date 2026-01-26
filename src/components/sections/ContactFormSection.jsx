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
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-100 border border-blue-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Subject
            </label>
            <input
              type="text"
              placeholder="Enter Your Subject"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              rows={6}
              placeholder="Type here..."
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none outline-none"
            ></textarea>
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

