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
            className="inline-block px-8 py-4 btn-gradient text-white rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default InternshipCTA

