import { useState } from 'react'
import { motion } from 'framer-motion'

const FAQSection = ({ faqItems }) => {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <div className="space-y-3">
        {faqItems.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-r from-gray-50 to-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100/50"
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left transition-all duration-300 hover:bg-gray-50/50"
            >
              <span className="font-medium text-gray-800 pr-4">
                {faq.question}
              </span>
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                  openFaq === index
                    ? 'bg-gradient-to-r from-[#3E3F95] to-[#2e2f75] scale-110'
                    : 'bg-gradient-to-r from-[#3E3F95] to-[#2e2f75]'
                }`}
              >
                <svg
                  className={`w-4 h-4 text-white transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            {openFaq === index && (
              <div className="px-5 pb-4">
                <p className="text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FAQSection

