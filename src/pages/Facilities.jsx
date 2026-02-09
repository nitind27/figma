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
    <div className="pt-16 md:pt-20 lg:pt-24">
      <section className="relative text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              'url(/gallery/6c3e3dd551b6b26721b711c2b843dbdc9ec8da40.jpg)',
            backgroundPosition: 'center 25%',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[320px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[1171px] w-full"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
              Facilities
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-white opacity-90 px-4">
              World-class infrastructure for excellence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{facility.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {facility.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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

