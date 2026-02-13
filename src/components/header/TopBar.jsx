const TopBar = () => {
  return (
    <div className="bg-[#1e3a8a] text-white py-1.5 sm:py-2">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <marquee 
          behavior="scroll" 
          direction="left" 
          scrollamount="3"
          className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm"
        >
          <span className="inline-block mr-8">LPS GROUP OF EDUCATION</span>
          <span className="inline-block mr-8">•</span>
          <span className="inline-block mr-8">LPS GROUP OF EDUCATION</span>
          <span className="inline-block mr-8">•</span>
          <span className="inline-block mr-8">LPS GROUP OF EDUCATION</span>
          <span className="inline-block mr-8">•</span>
          <span className="inline-block mr-8">LPS GROUP OF EDUCATION</span>
          <span className="inline-block mr-8">•</span>
          <span className="inline-block mr-8">LPS GROUP OF EDUCATION</span>
        </marquee>
      </div>
    </div>
  )
}

export default TopBar

