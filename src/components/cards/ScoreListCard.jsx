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
      className="bg-transparent"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-semibold text-gray-900">Latest Scores</h3>
        <button className="text-[10px] text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-1.5 py-0.5 text-[10px] font-medium transition-colors rounded ${
              activeTab === tab
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Match Info */}
      {data.matchInfo && (
        <div className="flex items-center gap-1 mb-2 text-[10px] text-gray-600">
          {data.matchInfo.isFavorite && (
            <svg
              className="w-3 h-3 text-red-500 fill-current flex-shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          )}
          <span className="truncate">{data.matchInfo.tournament}</span>
        </div>
      )}

      {/* Player Scores */}
      <div className="space-y-2">
        {data.players?.map((player, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + index * 0.1 }}
            className="space-y-0.5"
          >
            <div className="flex items-center justify-between gap-1">
              <span className="text-[10px] font-medium text-gray-900 truncate">
                {player.name} ({player.country})
              </span>
              <div className="flex items-center gap-1">
                {player.scores.map((score, scoreIndex) => (
                  <span
                    key={scoreIndex}
                    className="text-[10px] font-semibold text-gray-700"
                  >
                    {score}
                  </span>
                ))}
                {player.isWinner && (
                  <span className="bg-yellow-400 text-white text-[9px] font-bold px-1 py-0.5 rounded">
                    WIN
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ScoreListCard

