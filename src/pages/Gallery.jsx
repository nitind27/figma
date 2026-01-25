import { motion } from 'framer-motion'

const Gallery = () => {
  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Gallery Image ${i + 1}`,
  }))

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
              Gallery
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Moments from our school life
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              >
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-64 flex items-center justify-center">
                  <span className="text-white text-4xl">📷</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{image.title}</h3>
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

