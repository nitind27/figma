import { motion } from 'framer-motion'

const Gallery = () => {
  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Gallery Image ${i + 1}`,
  }))

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
              Gallery
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-white opacity-90 px-4">
              Moments from our school life
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-48 sm:h-56 md:h-64 flex items-center justify-center">
                  <span className="text-white text-3xl sm:text-4xl">📷</span>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-900">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

