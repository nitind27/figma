import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { number: '500+', label: 'Students' },
    { number: '50+', label: 'Teachers' },
    { number: '15+', label: 'Years Experience' },
    { number: '95%', label: 'Success Rate' },
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description:
        'We strive for excellence in everything we do, setting high standards for our students and ourselves.',
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description:
        'We maintain the highest ethical standards and promote honesty, respect, and responsibility.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description:
        'We embrace new ideas and technologies to enhance learning and prepare students for the future.',
    },
    {
      icon: '❤️',
      title: 'Compassion',
      description:
        'We care deeply about our students and create a supportive, inclusive environment for all.',
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Empowering students with quality education and holistic development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 p-8 rounded-2xl"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide a nurturing and stimulating learning environment that
                empowers students to achieve academic excellence, develop
                critical thinking skills, and become responsible global citizens.
                We are committed to fostering a love for learning and preparing
                students for success in their future endeavors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl"
            >
              <div className="text-5xl mb-4">👁️</div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed opacity-95">
                To be a leading educational institution recognized for academic
                excellence, innovative teaching methods, and holistic student
                development. We envision a school where every student discovers
                their potential, pursues their passions, and contributes
                positively to society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our Achievements
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-left text-gray-700 space-y-4">
              <p>
                Founded with a vision to transform education, Krish School has
                been a beacon of excellence for over 15 years. We started with a
                simple yet powerful belief: every child deserves access to
                quality education that nurtures their unique talents and
                prepares them for a successful future.
              </p>
              <p>
                Over the years, we have grown from a small institution to a
                thriving educational community. Our commitment to academic
                excellence, combined with our focus on character development and
                holistic growth, has helped thousands of students achieve their
                dreams.
              </p>
              <p>
                Today, we continue to innovate and evolve, integrating modern
                teaching methodologies, technology, and best practices from
                around the world. Our dedicated faculty, state-of-the-art
                facilities, and supportive community make Krish School a place
                where students thrive and excel.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

