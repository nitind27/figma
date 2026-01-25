import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DonutChart from '../charts/DonutChart'
import StatCard from '../cards/StatCard'
import ScoreListCard from '../cards/ScoreListCard'

const HeroSection = () => {
  // Dynamic chart data
  const chartData = [
    { label: 'Wins', percentage: 75, color: '#9333EA', value: 23 },
    { label: 'Draws', percentage: 15, color: '#F97316', value: 5 },
    { label: 'Losses', percentage: 10, color: '#E5E7EB', value: 3 },
  ]

  // Score data - Updated to match image
  const scoreData = [
    {
      type: 'list',
      items: [
        { name: 'Singles', percentage: null },
        { name: 'Anshika G', percentage: 28 },
        { name: 'Naomi C', percentage: 20 },
      ],
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-blue-600"></span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-4">
              We are LPS based school
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              For the last 25 years, we have been at the forefront of shaping
              the lives of hundreds of thousands of students by running our
              institutions at Varacha and Katargam in Surat.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our school readily combines a modern outlook with traditional
              values so as to maintain a happy and respectful rapport between
              students and staff.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 btn-gradient text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Read More
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Right Panel - Image with UI Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 rounded-2xl p-6 md:p-8 overflow-hidden min-h-[600px] md:min-h-[650px] flex items-center">
              {/* Large Purple Background Shape */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3/5 h-4/5 bg-purple-200 rounded-3xl opacity-50 z-0"></div>

              {/* Main Student Image - Left Aligned */}
              <div className="relative z-10 w-full h-full flex items-center">
                <div className="relative">
                  <img
                    src="/aboutgirl.png"
                    alt="Student"
                    className="w-full h-auto max-w-[350px] md:max-w-[400px] object-contain relative z-10"
                  />

                  {/* Floating UI Elements */}
                  {/* Top Left Card - Singles (Horizontal Pink Card) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -30, y: -30 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-pink-100 rounded-xl p-3 md:p-4 shadow-xl z-20"
                    style={{ minWidth: '130px', maxWidth: '150px' }}
                  >
                    <StatCard
                      title="Singles"
                      value="18"
                      change="↑"
                      changeType="up"
                    />
                  </motion.div>

                  {/* Top Right Card - Global Statistic with Donut Chart (Vertical White Card) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 30, y: -30 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute top-0 right-0 md:top-56 md:left-80 bg-white rounded-xl p-4 md:p-5 shadow-xl z-20"
                    style={{ minWidth: '200px', maxWidth: '230px' }}
                  >
                    <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-3">
                      Global Statistic
                    </h4>
                    <div className="flex flex-col items-center">
                      <DonutChart data={chartData} size={100} />
                      <div className="mt-3 space-y-1.5 w-full">
                        {chartData.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center space-x-2">
                              <div
                                className="w-3 h-3 rounded"
                                style={{ backgroundColor: item.color }}
                              ></div>
                              <span className="text-xs text-gray-600">
                                {item.label}
                              </span>
                            </div>
                            <span className="text-xs font-semibold text-gray-900">
                              {item.percentage}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom Left Card - Latest Scores (Vertical White Card) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -30, y: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl p-4 md:p-5 shadow-xl z-20"
                    style={{ minWidth: '260px', maxWidth: '300px' }}
                  >
                    <ScoreListCard data={scoreData[0].items} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

