import { useState, useEffect } from 'react'

const TopBar = () => {
  const items = [
    'LPS GROUP OF EDUCATION',
    'Quality Education Since 1990',
    'Excellence in Learning',
    'Building Future Leaders',
    'Admissions Open Now'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
        setIsTransitioning(false)
      }, 300) // Half of transition duration
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [items.length])

  return (
    <div className="bg-[#1e3a8a] text-white py-1.5 sm:py-2 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-center h-full min-h-[20px] sm:min-h-[24px] relative">
          {/* Slider Container */}
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-600 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex items-center justify-center"
                  style={{ minWidth: '100%' }}
                >
                  <span 
                    className={`text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-medium inline-block ${
                      isTransitioning && index === currentIndex 
                        ? 'opacity-0 scale-95' 
                        : 'opacity-100 scale-100'
                    } transition-all duration-300`}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </div>

      {/* Gradient Overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#1e3a8a] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#1e3a8a] to-transparent pointer-events-none z-10" />
    </div>
  )
}

export default TopBar

