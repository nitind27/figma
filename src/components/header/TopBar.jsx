const TopBar = () => {
  return (
    <div className="bg-[#1e3a8a] text-white py-2 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="flex items-center">
              <span>LPS GROUP OF EDUCATION</span>
              {i < 4 && <span className="mx-2">•</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBar

