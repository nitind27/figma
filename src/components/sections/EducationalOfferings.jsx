import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const EducationalOfferings = ({ offerings }) => {
  return (
    <section className="py-16 md:py-2 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <p> The Education of Tomorrow, Rooted in</p> <p> Tradition Invite You</p>
          </h2>
          <p className="text-lg text-[#737373] max-w-3xl mx-auto">
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
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 36C0 16.1178 16.1178 0 36 0C55.8823 0 72 16.1178 72 36C72 55.8823 55.8823 72 36 72C16.1178 72 0 55.8823 0 36Z" fill="#0DBBF1" fill-opacity="0.2" />
                  <g clip-path="url(#clip0_218_82)">
                    <g clip-path="url(#clip1_218_82)">
                      <g clip-path="url(#clip2_218_82)">
                        <path d="M30.7754 43.6057H40.2247V48.3304H30.7754V43.6057Z" fill="#3E3F95" />
                        <path d="M35.4997 25.6521C29.7683 25.6521 25.1055 30.315 25.1055 36.0464V50.2203C25.1055 52.3045 26.8011 54.0001 28.8852 54.0001H42.1142C44.1984 54.0001 45.894 52.3045 45.894 50.2203V36.0464C45.894 30.315 41.2312 25.6521 35.4997 25.6521ZM29.8301 34.1565H41.1693V36.0464H39.2795V37.9362H37.3896V36.0464H29.8301V34.1565ZM42.1142 50.2203H28.8852V41.7159H42.1142V50.2203Z" fill="#3E3F95" />
                        <path d="M45.2042 23.8388L39.8411 22L39.0566 24.288C40.9519 24.8625 42.6545 25.8834 44.0422 27.228L45.2042 23.8388Z" fill="#3E3F95" />
                        <path d="M31.9425 24.288L31.158 22L25.7949 23.8388L26.9569 27.228C28.3446 25.8834 30.0473 24.8625 31.9425 24.288Z" fill="#3E3F95" />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_218_82">
                      <rect width="32" height="32" fill="white" transform="translate(19.5 22)" />
                    </clipPath>
                    <clipPath id="clip1_218_82">
                      <rect width="32" height="32" fill="white" transform="translate(19.5 22)" />
                    </clipPath>
                    <clipPath id="clip2_218_82">
                      <rect width="20.7885" height="32" fill="white" transform="translate(25.1055 22)" />
                    </clipPath>
                  </defs>
                </svg>

              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 inline-block pb-4 relative">
                {item.title}
                <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-[#3E3F95]"></span>
              </h3>
              <p className="text-[#737373] mb-4 leading-relaxed text-sm">
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

