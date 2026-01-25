import { Link, useLocation } from 'react-router-dom'

const NavLink = ({ to, children, className = '' }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors ${
        isActive
          ? 'text-blue-600'
          : 'text-gray-800 hover:text-blue-600'
      } ${className}`}
    >
      {children}
    </Link>
  )
}

export default NavLink

