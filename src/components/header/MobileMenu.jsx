import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const MobileMenu = ({ isOpen, onClose, menuItems }) => {
  const location = useLocation()
  const [openDropdowns, setOpenDropdowns] = useState({})

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.07,
      },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const backdropVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const subItemVariants = {
    hidden: {
      opacity: 0,
      y: 4,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="lg:hidden fixed inset-0 bg-black/50 z-[100]"
          />
          {/* Sidebar Menu */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl z-[110] overflow-y-auto flex flex-col"
            style={{ maxHeight: '100vh' }}
          >
            <div className="px-4 pt-24 pb-8 space-y-2 flex-1">
            {menuItems.map((item, index) => {
              const prevItem = index > 0 ? menuItems[index - 1] : null
              const showDivider = index > 0 && (
                (prevItem.type === 'link' && item.type === 'button') ||
                (prevItem.type === 'dropdown' && item.type === 'button') ||
                (prevItem.type === 'button' && item.type !== 'button')
              )

              if (item.type === 'dropdown') {
                return (
                  <motion.div key={index} variants={itemVariants}>
                    {showDivider && <div className="border-t border-gray-100 my-2" />}
                    <motion.button
                      onClick={() => toggleDropdown(item.key)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-300 ${
                        openDropdowns[item.key]
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.2)]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <motion.svg
                        animate={{
                          rotate: openDropdowns[item.key] ? 180 : 0,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 25,
                        }}
                        className="w-4 h-4 flex-shrink-0"
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
                      </motion.svg>
                    </motion.button>
                    <AnimatePresence>
                      {openDropdowns[item.key] && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="pl-4 pr-2 space-y-1 mt-1"
                        >
                          {item.items.map((subItem) => (
                            <motion.div key={subItem.path} variants={subItemVariants}>
                              <Link
                                to={subItem.path}
                                onClick={() => {
                                  onClose()
                                  setOpenDropdowns({})
                                }}
                                className={`block px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ${
                                  location.pathname === subItem.path
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                                    : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.2)]'
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              }

              if (item.type === 'button') {
                return (
                  <motion.div key={index} variants={itemVariants}>
                    {showDivider && <div className="border-t border-gray-100 my-2" />}
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="block px-4 py-3 rounded-xl text-base font-medium tracking-wide bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-500 text-white text-center shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              }

              return (
                <motion.div key={index} variants={itemVariants}>
                  {showDivider && <div className="border-t border-gray-100 my-2" />}
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.2)] hover:scale-[1.02]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu

