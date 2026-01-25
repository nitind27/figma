import { motion } from 'framer-motion'

const SchoolApp = () => {
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
              School App
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Stay connected with our mobile application
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-12 mb-8">
              <div className="text-8xl mb-4">📱</div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Download Our App
              </h2>
              <p className="text-white/90 text-lg">
                Access school information, assignments, and more on the go
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">
                Download for iOS
              </button>
              <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SchoolApp

