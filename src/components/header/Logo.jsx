import { Link } from 'react-router-dom'

const Logo = ({ className = '' }) => {
  return (
    <Link
      to="/"
      className={`flex items-center hover:opacity-90 transition-opacity ${className}`}
    >
      <img
        src="/5f72a812ff23fe954721b9cbdef08a5175ea805b.png"
        alt="LPS Group of Education Logo"
        className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-contain"
      />
    </Link>
  )
}

export default Logo

