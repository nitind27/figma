import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { path: '/', label: 'Admissions' },
    { path: '/contact', label: 'Contact' },
    { path: '/about', label: 'Our Values' },
    { path: '/gallery', label: 'Gallery' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
  ]

  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-6">
              <img
                src="/5f72a812ff23fe954721b9cbdef08a5175ea805b.png"
                alt="LPS Group of Education Logo"
                className="h-16 w-auto object-contain filter brightness-0 invert"
              />
            </Link>
            <button className="mb-6 px-6 py-3 btn-gradient text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md">
              Pay School Fees
            </button>
            <p className="text-sm leading-relaxed text-gray-300">
              LPS Group of Education is committed to providing quality education
              and holistic development for students. With over 25 years of
              experience, we continue to shape the future of education in Surat.
            </p>
          </motion.div>

          {/* Middle Column - Services & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <span className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Katargam School Address, Surat, Gujarat
                  </span>
                </li>
                <li>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +91 1234567890
                  </span>
                </li>
                <li>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    info@lpsgroupofeducation.com
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Social & Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Social Connected */}
            <div className="mb-8">
              <h4 className="font-bold text-lg mb-4">Social Connected</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Download */}
            <div>
              <h4 className="font-bold text-lg mb-4">Download</h4>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center">
                  <span className="mr-2">📱</span>
                  Google Play
                </button>
                <button className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center">
                  <span className="mr-2">🍎</span>
                  App Store
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>©{currentYear} LPSgroupofeducation. All rights reserved.</p>
            <p className="mt-2 md:mt-0">LPS Group of Education</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
