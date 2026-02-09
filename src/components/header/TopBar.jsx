const TopBar = () => {
  return (
    <div className="bg-[#1e3a8a] text-white py-1.5 sm:py-2">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-center overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-center space-x-1 sm:space-x-1.5 md:space-x-2 whitespace-nowrap">
            {/* Mobile: Show 1 item, Small: Show 2 items, Medium: Show 3 items, Large: Show all 5 */}
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`flex items-center ${
                  i === 0 ? 'flex' : 'hidden'
                } ${
                  i < 2 ? 'sm:flex' : 'sm:hidden'
                } ${
                  i < 3 ? 'md:flex' : 'md:hidden'
                } ${
                  i < 5 ? 'lg:flex' : 'lg:hidden'
                }`}
              >
                <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm">LPS GROUP OF EDUCATION</span>
                {i < 4 && (
                  <span className="mx-1 sm:mx-1.5 md:mx-2 text-[8px] sm:text-[10px] md:text-xs">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar

