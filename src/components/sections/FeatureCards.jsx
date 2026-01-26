import { motion } from 'framer-motion'

const FeatureCards = ({ cards }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#F9F8FE] p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 mb-4 mx-auto rounded-full flex items-center justify-center">
                <div className="flex items-center justify-center w-full h-full">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-center">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards

