import { motion } from 'framer-motion'
import { useState } from 'react'

const ScoreListCard = ({ data, delay = 0 }) => {
  const [activeTab, setActiveTab] = useState('Singles')

  const tabs = ['Singles', 'Doubles', 'Mixed Doubles']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-4 shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-900">Latest Scores</h3>
        <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 text-xs font-medium transition-colors ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* List Items */}
      <div className="space-y-2">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + index * 0.1 }}
            className="flex items-center justify-between py-2"
          >
            <span className="text-sm font-medium text-gray-900">
              {item.name}
            </span>
            {item.percentage !== null && (
              <span className="text-sm font-semibold text-gray-700">
                ({item.percentage}%)
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ScoreListCard

