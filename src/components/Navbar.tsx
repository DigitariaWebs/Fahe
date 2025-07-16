import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'
import useI18n from '../hooks/useI18n'
import { colors } from '../config/colors'
import { navigateToContact } from '../utils/navigation'

export default function Navbar() {
  const { t } = useTranslation()
  const { changeLanguage, currentLanguage } = useI18n()
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  
  // Check if we're on a services page
  const isServicesPage = location.pathname.startsWith('/services')

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  const menuItems = [
    { key: 'services', label: 'Services', hasDropdown: true },
    { key: 'about', label: 'About' }
  ]

  const serviceItems = [
    { key: 'transmission', label: t('footer.services.transmission') },
    { key: 'engine', label: t('footer.services.engine') },
    { key: 'maintenance', label: t('footer.services.maintenance') },
    { key: 'diagnostic', label: t('footer.services.diagnostic') }
  ]

  // Click outside to close search and dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target) return
      
      const target = event.target as Element
      const isClickInsideDropdown = target.closest('.services-dropdown')
      
      if (!isClickInsideDropdown) {
        setIsServicesDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Click outside to close search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
        setSearchQuery('')
      }
    }

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Focus search input when opened
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSearchOpen])

  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      {/* Main Navigation Bar */}
      <div className="w-full bg-transparent">
        <div className="max-w-none w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img src="/logo.svg" alt="Logo" className="w-24 h-24" />
              </Link>
            </div>

            {/* Center Info - Boarding Hours */}
            <div className={`hidden md:flex items-center space-x-2 ${isServicesPage ? 'text-blue-600' : 'text-white'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: colors.primary[700]}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex flex-col">
                <span className={`text-sm font-semibold ${isServicesPage ? 'text-blue-600' : 'text-white'}`}>BOARDING</span>
                <span className={`text-sm font-semibold ${isServicesPage ? 'text-blue-600' : 'text-white'}`}>HOURS</span>
              </div>
              <span className={`text-sm ${isServicesPage ? 'text-blue-600' : 'text-white'} ml-2`}>Lun-Ven 8h30-17h</span>
            </div>

            {/* Right Side - Call Us & CTA */}
            <div className="flex items-center space-x-6">
              {/* Call Us */}
              <div className={`hidden md:flex items-center space-x-2 ${isServicesPage ? 'text-blue-600' : 'text-white'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: colors.primary[700]}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col">
                  <span className={`text-sm font-semibold ${isServicesPage ? 'text-blue-600' : 'text-white'}`}>CALL US</span>
                  <span className={`text-sm ${isServicesPage ? 'text-blue-600' : 'text-white'}`}>(438) 867-1822</span>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => navigateToContact(navigate, location.pathname)}
                className="text-white px-6 py-2 text-sm font-bold rounded transition-all duration-200 flex items-center space-x-2"
                style={{backgroundColor: colors.primary[700]}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary[800]}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary[700]}
              >
                <span>MAKE AN APPOINTMENT</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Mobile menu button */}
              <div 
                className="md:hidden p-2 text-white transition-colors duration-200 cursor-pointer"
                onMouseEnter={(e) => e.currentTarget.style.color = colors.primary[700]}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <div className="w-full bg-white border-t border-gray-200">
        <div className="max-w-none w-[70%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.key} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <Link
                        to="/services"
                        className="flex items-center space-x-1 text-gray-700 font-medium py-2 px-3 transition-all duration-200"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = colors.primary[700]
                          setIsServicesDropdownOpen(true)
                        }}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      >
                        <span className="text-sm font-semibold">{item.label}</span>
                        <motion.svg 
                          animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-4 h-4 ml-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          style={{color: colors.primary[700]}}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </Link>
                      
                      {/* Services Dropdown */}
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 services-dropdown"
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                          >
                            {serviceItems.map((service) => (
                              <Link
                                key={service.key}
                                to={`/services/${service.key}`}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                onMouseEnter={(e) => e.currentTarget.style.color = colors.primary[700]}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
                                onClick={() => setIsServicesDropdownOpen(false)}
                              >
                                {service.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a 
                      href={`#${item.key}`}
                      className="flex items-center space-x-1 text-gray-700 font-medium py-2 px-3 transition-all duration-200"
                      onMouseEnter={(e) => e.currentTarget.style.color = colors.primary[700]}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
                      onClick={(e) => {
                        if (location.pathname !== '/') {
                          e.preventDefault()
                          window.location.href = `/#${item.key}`
                        }
                      }}
                    >
                      <span className="text-sm font-semibold">{item.label}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div ref={searchRef} className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-500 transition-colors duration-200"
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.primary[700]}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                  aria-label="Search"
                >
                  <AnimatePresence mode="wait">
                    {isSearchOpen ? (
                      <motion.svg
                        key="close"
                        initial={{ rotate: 0, scale: 0.8 }}
                        animate={{ rotate: 90, scale: 1 }}
                        exit={{ rotate: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </motion.svg>
                    ) : (
                      <motion.svg
                        key="search"
                        initial={{ rotate: 90, scale: 0.8 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: 90, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </button>
                
                {/* Animated Search Input */}
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ opacity: 0, width: 0, x: 20 }}
                      animate={{ opacity: 1, width: 300, x: 0 }}
                      exit={{ opacity: 0, width: 0, x: 20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute right-0 top-0 z-10 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="flex items-center">
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search..."
                          className="flex-1 px-4 py-2 text-gray-700 bg-transparent border-none outline-none placeholder-gray-400"
                          onKeyDown={(e) => {
                            if (e.key === 'Escape') {
                              setIsSearchOpen(false)
                              setSearchQuery('')
                            }
                          }}
                        />
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                          onClick={() => {
                            if (searchQuery.trim()) {
                              // Handle search submission
                              console.log('Searching for:', searchQuery)
                              setIsSearchOpen(false)
                              setSearchQuery('')
                            }
                          }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Language Toggle Switch */}
              <div className="flex items-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => changeLanguage(currentLanguage === 'fr' ? 'en' : 'fr')}
                  className="relative flex items-center justify-center w-16 h-8 rounded-full transition-all duration-300 shadow-sm"
                  style={{
                    backgroundColor: currentLanguage === 'fr' ? colors.primary[600] : colors.primary[600],
                    border: `2px solid ${colors.primary[700]}`
                  }}
                >
                  {/* Background flags */}
                  <div className="absolute left-2 text-sm opacity-80">
                    🇫🇷
                  </div>
                  <div className="absolute right-2 text-sm opacity-80">
                    🇺🇸
                  </div>
                  
                  {/* Moving toggle */}
                  <motion.div
                    animate={{
                      x: currentLanguage === 'fr' ? -12 : 12,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-sm border-2"
                    style={{ borderColor: colors.primary[700] }}
                  >
                    {currentLanguage === 'fr' ? '🇫🇷' : '🇺🇸'}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-3">
            {menuItems.map((item) => (
              <div key={item.key}>
                {item.hasDropdown ? (
                  <div>
                    <Link 
                      to="/services"
                      className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-700 transition-all duration-200 font-medium"
                      onMouseEnter={(e) => e.currentTarget.style.color = colors.primary[700]}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    >
                      <span>{item.label}</span>
                      <motion.svg 
                        animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </Link>
                    
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {serviceItems.map((service) => (
                            <Link
                              key={service.key}
                              to={`/services/${service.key}`}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                              onMouseEnter={(e) => e.currentTarget.style.color = colors.primary[700]}
                              onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                              onClick={() => {
                                setIsServicesDropdownOpen(false)
                                setIsMenuOpen(false)
                              }}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a 
                    href={`#${item.key}`}
                    className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-700 transition-all duration-200 font-medium"
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.primary[700]}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
                    onClick={(e) => {
                      if (location.pathname !== '/') {
                        e.preventDefault()
                        window.location.href = `/#${item.key}`
                      }
                      setIsMenuOpen(false)
                    }}
                  >
                    <span>{item.label}</span>
                  </a>
                )}
              </div>
            ))}
            
            {/* Mobile Info */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className={`text-sm ${isServicesPage ? 'text-blue-600' : 'text-gray-600'}`}>
                <div className="font-semibold">BOARDING HOURS</div>
                <div>Lun-Ven 8h30-17h</div>
              </div>
              <div className={`text-sm ${isServicesPage ? 'text-blue-600' : 'text-gray-600'}`}>
                <div className="font-semibold">CALL US</div>
                <div>(438) 867-1822</div>
              </div>
              <div className={`text-sm ${isServicesPage ? 'text-blue-600' : 'text-gray-600'}`}>
                <div className="font-semibold">ADDRESS</div>
                <div>2844 Boul Industriel, Joliette, QC</div>
              </div>
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold ${isServicesPage ? 'text-blue-600' : 'text-gray-600'}`}>LANGUAGE</span>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => changeLanguage(currentLanguage === 'fr' ? 'en' : 'fr')}
                  className="relative flex items-center justify-center w-16 h-8 rounded-full transition-all duration-300 shadow-sm"
                  style={{
                    backgroundColor: currentLanguage === 'fr' ? colors.primary[600] : colors.primary[600],
                    border: `2px solid ${colors.primary[700]}`
                  }}
                >
                  {/* Background flags */}
                  <div className="absolute left-2 text-sm opacity-80">
                    🇫🇷
                  </div>
                  <div className="absolute right-2 text-sm opacity-80">
                    🇺🇸
                  </div>
                  
                  {/* Moving toggle */}
                  <motion.div
                    animate={{
                      x: currentLanguage === 'fr' ? -12 : 12,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-sm border-2"
                    style={{ borderColor: colors.primary[700] }}
                  >
                    {currentLanguage === 'fr' ? '🇫🇷' : '🇺🇸'}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
  