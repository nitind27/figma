import { motion } from 'framer-motion'
import { useState } from 'react'

const ScoreCard = ({ scores, delay = 0 }) => {
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

      {/* Match Details */}
      <div className="space-y-3">
        {scores.map((score, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + index * 0.1 }}
            className="border border-gray-200 rounded-lg p-3"
          >
            <p className="text-xs text-gray-600 mb-2">{score.tournament}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  {score.player1.name}
                </span>
                <div className="flex items-center space-x-2">
                  {score.player1.scores.map((s, i) => (
                    <span
                      key={i}
                      className="text-sm font-semibold text-gray-700"
                    >
                      {s}
                    </span>
                  ))}
                  {score.player1.win && (
                    <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded">
                      WIN
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  {score.player2.name}
                </span>
                <div className="flex items-center space-x-2">
                  {score.player2.scores.map((s, i) => (
                    <span
                      key={i}
                      className="text-sm font-semibold text-gray-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ScoreCard

