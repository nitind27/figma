import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const DonutChart = ({ data, size = 120 }) => {
  const [animatedData, setAnimatedData] = useState(
    data.map(() => ({ ...data[0], percentage: 0 }))
  )

  useEffect(() => {
    const duration = 1000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedData(
        data.map((item) => ({
          ...item,
          percentage: item.percentage * progress,
        }))
      )

      if (currentStep >= steps) {
        clearInterval(interval)
        setAnimatedData(data)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [data])

  const radius = size / 2 - 15
  const circumference = 2 * Math.PI * radius
  let currentOffset = circumference

  const total = data.reduce((sum, item) => sum + item.percentage, 0)
  const winsData = data.find((item) => item.label === 'Wins')
  const winsValue = winsData?.value || Math.round((winsData?.percentage || 0) / 100 * 31)

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {animatedData.map((item, index) => {
          const segmentLength = (item.percentage / 100) * circumference
          const strokeDasharray = `${segmentLength} ${circumference}`
          const strokeDashoffset = currentOffset
          currentOffset -= segmentLength

          return (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={item.color}
              strokeWidth="18"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />
          )
        })}
        <text
          x={size / 2}
          y={size / 2 - 5}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-gray-800 font-bold text-sm"
          transform={`rotate(90 ${size / 2} ${size / 2})`}
        >
          {winsValue} Wins
        </text>
        <text
          x={size / 2}
          y={size / 2 + 12}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-gray-600 text-xs"
          transform={`rotate(90 ${size / 2} ${size / 2})`}
        >
          2%
        </text>
      </svg>
    </div>
  )
}

export default DonutChart

