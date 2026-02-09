import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const InternshipCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E3F95] mb-6">
            Want to be an intern with us and you are a student?
          </h2>
          <span className="flex flex-col items-center justify-center mb-8  text-gray-500">

            <p className="text-lg  leading-relaxed">
              Ut rutrum tincidunt justo convallis dignissim. Proin maximus sagittis tempor. Vivamus
            </p>
            <p>ornare ligula nec lacus cursus, quis faucibus leo gravida.</p>
          </span>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3E3F95] to-[#2e2f75] text-white rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#3E3F95]/50 shadow-xl shadow-[#3E3F95]/30 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#2e2f75] to-[#3E3F95] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">
              Read More
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default InternshipCTA

