import { motion } from 'framer-motion'

const Facilities = () => {
  const facilities = [
    {
      icon: '📚',
      title: 'Library',
      description:
        'Well-stocked library with thousands of books and digital resources.',
    },
    {
      icon: '🔬',
      title: 'Science Labs',
      description:
        'State-of-the-art laboratories for Physics, Chemistry, and Biology.',
    },
    {
      icon: '💻',
      title: 'Computer Lab',
      description:
        'Fully equipped computer labs with latest technology.',
    },
    {
      icon: '🏃',
      title: 'Sports Facilities',
      description:
        'Spacious playgrounds and indoor sports complex.',
    },
  ]

  return (
    <div className="pt-24 md:pt-28">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Facilities
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              World-class infrastructure for excellence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Facilities

