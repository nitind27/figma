import { motion } from 'framer-motion'

const SchoolApp = () => {
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
              School App
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-white opacity-90 px-4">
              Stay connected with our mobile application
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3 sm:mb-4">📱</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Download Our App
              </h2>
              <p className="text-white/90 text-base sm:text-lg md:text-xl">
                Access school information, assignments, and more on the go
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all text-sm sm:text-base">
                Download for iOS
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all text-sm sm:text-base">
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

