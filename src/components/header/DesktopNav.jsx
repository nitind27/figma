import { Link, useLocation } from 'react-router-dom'
import NavLink from './NavLink'
import DropdownMenu from './DropdownMenu'

const DesktopNav = ({ menuItems }) => {
  const location = useLocation()

  return (
    <div className="hidden lg:flex items-center space-x-6">
      {menuItems.map((item, index) => {
        if (item.type === 'dropdown') {
          const isActive = item.items.some(
            (subItem) => location.pathname === subItem.path
          )
          return (
            <DropdownMenu
              key={index}
              label={item.label}
              items={item.items}
              isActive={isActive}
            />
          )
        }

        if (item.type === 'button') {
          return (
            <Link
              key={index}
              to={item.path}
              className="px-6 py-2.5 btn-gradient text-white text-sm font-medium rounded-md transition-all shadow-md"
            >
              {item.label}
            </Link>
          )
        }

        return (
          <NavLink key={index} to={item.path}>
            {item.label}
          </NavLink>
        )
      })}
    </div>
  )
}

export default DesktopNav

