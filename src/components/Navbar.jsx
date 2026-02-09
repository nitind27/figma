import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TopBar from './header/TopBar'
import Logo from './header/Logo'
import DesktopNav from './header/DesktopNav'
import MobileMenuButton from './header/MobileMenuButton'
import MobileMenu from './header/MobileMenu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { type: 'link', path: '/', label: 'Home' },
    {
      type: 'dropdown',
      key: 'about',
      label: 'About',
      items: [
        { path: '/about', label: 'About Us' },
        { path: '/about/history', label: 'History' },
        { path: '/about/team', label: 'Our Team' },
      ],
    },
    { type: 'link', path: '/gallery', label: 'Gallery' },
    { type: 'link', path: '/the-school', label: 'The School' },
    { type: 'link', path: '/school-app', label: 'School App' },
    {
      type: 'dropdown',
      key: 'our-school',
      label: 'Our School',
      items: [
        { path: '/the-school', label: 'The School' },
        { path: '/academics', label: 'Academics' },
        { path: '/facilities', label: 'Facilities' },
      ],
    },
    { type: 'button', path: '/contact', label: 'Contact' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
   
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-gray-200/50 border-b border-gray-100' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24 lg:h-28">
            <Logo />
            <DesktopNav menuItems={menuItems} />
            <MobileMenuButton
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          menuItems={menuItems}
        />
      </motion.nav>
      <TopBar />
    </div>
  )
}

export default Navbar
