import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SecondHeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/educationbg.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
        >
          Education for a Bright<br />Future.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-white font-sans"
        >
          A modern learning environment where education meets innovation,<br />
          inspiring every student to succeed.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
            </svg>
            Apply Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default SecondHeroSection

