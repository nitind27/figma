import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TheSchool = () => {
  const facilities = [
    {
      icon: '📚',
      title: 'Library',
      description:
        'Well-stocked library with thousands of books, digital resources, and quiet study spaces.',
    },
    {
      icon: '🔬',
      title: 'Science Labs',
      description:
        'State-of-the-art laboratories for Physics, Chemistry, and Biology with modern equipment.',
    },
    {
      icon: '💻',
      title: 'Computer Lab',
      description:
        'Fully equipped computer labs with latest technology and high-speed internet connectivity.',
    },
    {
      icon: '🏃',
      title: 'Sports Facilities',
      description:
        'Spacious playgrounds, indoor sports complex, and facilities for various sports activities.',
    },
    {
      icon: '🎨',
      title: 'Arts & Music',
      description:
        'Dedicated spaces for art, music, and performing arts to nurture creative talents.',
    },
    {
      icon: '🍽️',
      title: 'Cafeteria',
      description:
        'Clean and hygienic cafeteria serving nutritious meals and snacks throughout the day.',
    },
  ]

  const programs = [
    {
      title: 'Early Years Program',
      age: 'Ages 3-5',
      description:
        'A nurturing environment that focuses on play-based learning, social skills, and foundational knowledge.',
    },
    {
      title: 'Primary Education',
      age: 'Grades 1-5',
      description:
        'Comprehensive curriculum covering core subjects with emphasis on critical thinking and creativity.',
    },
    {
      title: 'Middle School',
      age: 'Grades 6-8',
      description:
        'Rigorous academic program preparing students for higher education with specialized subjects.',
    },
    {
      title: 'High School',
      age: 'Grades 9-12',
      description:
        'Advanced curriculum with multiple streams and college preparation programs.',
    },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The School
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Discover our world-class facilities and comprehensive programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to Our Campus
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Krish School is more than just a place of learning—it's a
                vibrant community where students grow, explore, and excel. Our
                modern campus spans across acres of beautifully maintained
                grounds, providing an ideal environment for academic and
                personal development.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that the physical environment plays a crucial role in
                learning. That's why we've invested in state-of-the-art
                facilities, spacious classrooms, and well-equipped laboratories
                that inspire curiosity and foster innovation.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 btn-gradient text-white rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Schedule a Visit
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-12 h-80 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-8xl mb-4">🏫</div>
                  <p className="text-2xl font-semibold">Modern Campus</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              World-class infrastructure designed to support every aspect of
              student development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational programs for students of all ages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {program.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    {program.age}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-12 h-80 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-8xl mb-4">🎉</div>
                  <p className="text-2xl font-semibold">Vibrant Campus Life</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Campus Life & Activities
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                At Krish School, education extends beyond the classroom. We
                offer a rich array of extracurricular activities, clubs, and
                events that help students discover their passions and develop
                new skills.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Sports teams and competitions
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Art and music clubs
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Science and technology clubs
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Community service programs
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Annual cultural festivals
                </li>
              </ul>
              <Link
                to="/academics"
                className="inline-block px-6 py-3 btn-gradient text-white rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Our Campus
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a visit to see our facilities and meet our community
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 btn-gradient text-white rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Book a Campus Tour
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TheSchool

