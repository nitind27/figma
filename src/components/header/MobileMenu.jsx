import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import DropdownMenu from './DropdownMenu'

const MobileMenu = ({ isOpen, onClose, menuItems }) => {
  const location = useLocation()
  const [openDropdowns, setOpenDropdowns] = useState({})

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleItemClick = (path) => {
    window.location.href = path
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item, index) => {
              if (item.type === 'dropdown') {
                return (
                  <div key={index}>
                    <button
                      onClick={() => toggleDropdown(item.key)}
                      className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdowns[item.key] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdowns[item.key] && (
                      <div className="pl-4 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => {
                              onClose()
                              setOpenDropdowns({})
                            }}
                            className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              if (item.type === 'button') {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={onClose}
                    className="block px-4 py-2 rounded-lg text-base font-medium btn-gradient text-white text-center transition-all"
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={onClose}
                  className={`block px-4 py-2 rounded-lg text-base font-medium transition-all ${
                    location.pathname === item.path
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu

