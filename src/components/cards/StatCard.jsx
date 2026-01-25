import { motion } from 'framer-motion'

const StatCard = ({ title, value, change, changeType = 'up', delay = 0 }) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
      <div className="flex items-center space-x-1">
        <p className="text-xl md:text-2xl font-bold text-gray-900">{value}</p>
        {change && (
          <div className="flex items-center">
            <span
              className={`text-xs font-bold ${
                changeType === 'up' ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {change}
            </span>
            <svg
              className={`w-3 h-3 ${
                changeType === 'up' ? 'text-red-600' : 'text-green-600'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {changeType === 'up' ? (
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

export default StatCard

