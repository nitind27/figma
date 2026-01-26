import { motion } from 'framer-motion'

const GallerySection = ({ images }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Information for teachers and students, parenting<br /> information and
            education news.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
          {images.map((image, index) => {
            // Match exact layout from image - create collage effect with varied heights
            // Top row: 3 images, Bottom row: 3 images
            // Top-right (Yoga Session) is taller, creating dynamic look
            const layoutConfig = [
              { height: 'h-64 md:h-72 lg:h-[320px]' },  // Top-left: Martial Arts - medium height
              { height: 'h-64 md:h-80 lg:h-[280px]' },  // Top-middle: Award Ceremony - medium height
              { height: 'h-64 md:h-96 lg:h-[400px]' },  // Top-right: Yoga Session - TALLER
              { height: 'h-64 md:h-80 lg:h-[300px]' },  // Bottom-left: Student Activities - medium
              { height: 'h-64 md:h-72 lg:h-[280px]' },  // Bottom-middle: Kargil Vijay Diwas - medium
              { height: 'h-64 md:h-80 lg:h-[300px]' },  // Bottom-right: Panel Discussion - medium
            ]
            const config = layoutConfig[index % layoutConfig.length]
            
            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl cursor-pointer"
              >
                <div className={`relative ${config.height} overflow-hidden`}>
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default GallerySection

