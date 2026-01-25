import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Academics = () => {
  const subjects = [
    {
      icon: '📐',
      title: 'Mathematics',
      description:
        'Comprehensive math curriculum from basic arithmetic to advanced calculus and statistics.',
    },
    {
      icon: '🔬',
      title: 'Sciences',
      description:
        'Physics, Chemistry, and Biology with hands-on laboratory experiences and experiments.',
    },
    {
      icon: '🌍',
      title: 'Social Studies',
      description:
        'History, Geography, Civics, and Economics to understand the world around us.',
    },
    {
      icon: '📖',
      title: 'Languages',
      description:
        'English, Hindi, and other languages with focus on communication and literature.',
    },
    {
      icon: '💻',
      title: 'Computer Science',
      description:
        'Programming, digital literacy, and technology skills for the modern world.',
    },
    {
      icon: '🎨',
      title: 'Arts & Design',
      description:
        'Visual arts, music, drama, and creative expression to nurture artistic talents.',
    },
  ]

  const academicLevels = [
    {
      level: 'Elementary',
      grades: 'Grades 1-5',
      focus: 'Foundation Building',
      description:
        'Building strong foundations in core subjects with emphasis on reading, writing, and basic mathematics. Interactive learning methods and play-based activities.',
      highlights: [
        'Phonics and Reading Program',
        'Basic Math Concepts',
        'Science Exploration',
        'Art and Music',
        'Physical Education',
      ],
    },
    {
      level: 'Middle School',
      grades: 'Grades 6-8',
      focus: 'Skill Development',
      description:
        'Developing critical thinking and problem-solving skills. Introduction to specialized subjects and preparation for higher education.',
      highlights: [
        'Advanced Mathematics',
        'Laboratory Sciences',
        'Language Arts',
        'Social Sciences',
        'Technology Integration',
      ],
    },
    {
      level: 'High School',
      grades: 'Grades 9-12',
      focus: 'College Preparation',
      description:
        'Rigorous academic program with multiple streams. College preparation, career counseling, and advanced placement courses.',
      highlights: [
        'Advanced Placement (AP)',
        'College Prep Courses',
        'Career Counseling',
        'Research Projects',
        'Internship Opportunities',
      ],
    },
  ]

  const achievements = [
    {
      icon: '🏆',
      title: 'Academic Excellence',
      description: 'Consistently high board exam results and academic achievements',
    },
    {
      icon: '🎓',
      title: 'College Placements',
      description: '95% of graduates admitted to top universities and colleges',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Students winning national and international competitions',
    },
    {
      icon: '🌟',
      title: 'Holistic Development',
      description: 'Balanced focus on academics, sports, and extracurriculars',
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
              Academics
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Excellence in Education, Innovation in Learning
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
                Our Academic Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                At Krish School, we believe in providing a comprehensive,
                well-rounded education that prepares students for success in an
                ever-changing world. Our curriculum is designed to foster
                critical thinking, creativity, and a lifelong love for learning.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We combine traditional teaching methods with modern pedagogical
                approaches, ensuring that students not only excel academically
                but also develop essential life skills, emotional intelligence,
                and social awareness.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 btn-gradient text-white rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Learn More
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
                  <div className="text-8xl mb-4">📚</div>
                  <p className="text-2xl font-semibold">Excellence in Learning</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Levels Section */}
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
              Academic Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs tailored to each stage of student development
            </p>
          </motion.div>

          <div className="space-y-8">
            {academicLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {level.level}
                      </h3>
                      <p className="text-blue-600 font-semibold">{level.grades}</p>
                    </div>
                    <span className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
                      {level.focus}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {level.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {level.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center p-3 bg-blue-50 rounded-lg"
                      >
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
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
              Core Subjects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse range of subjects to provide well-rounded education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{subject.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {subject.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {subject.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              Academic Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence reflected in our students' success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology Section */}
      <section className="py-16 md:py-24 bg-white">
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
                  <div className="text-8xl mb-4">👨‍🏫</div>
                  <p className="text-2xl font-semibold">Expert Faculty</p>
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
                Teaching Methodology
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our teaching approach combines the best of traditional and
                modern educational methods. We use interactive learning,
                project-based assignments, and technology integration to make
                learning engaging and effective.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Interactive and student-centered learning
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Technology-enhanced classrooms
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Regular assessments and feedback
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Individual attention and support
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Collaborative learning activities
                </li>
              </ul>
              <Link
                to="/the-school"
                className="inline-block px-6 py-3 btn-gradient text-white rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Explore Facilities
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
              Ready to Begin Your Academic Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us and experience excellence in education
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 btn-gradient text-white rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Academics

