import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const EducationalOfferings = ({ offerings }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Education of Tomorrow, Rooted in Tradition Invite You
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our purpose is to provide a safe, happy environment for your child where they are able to be themselves and thrive while acquiring the educational foundation needed to achieve this.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 inline-block pb-4 relative">
                {item.title}
                <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-blue-600"></span>
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                {item.description}
              </p>
              <Link
                to="/the-school"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationalOfferings

