import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useI18n from '../hooks/useI18n'
import { colors } from '../config/colors'
import { navigateToContact } from '../utils/navigation'

export default function Navbar() {
  const { t } = useTranslation()
  const { changeLanguage, currentLanguage } = useI18n()
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Check if we're on a services page

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  const menuItems = [
    { key: 'services', label: 'Services', hasDropdown: true },
    { key: 'about', label: 'About' },
    { key: 'blog', label: 'Blog' }
  ]

  const serviceItems = [
    { key: 'transmission', label: t('footer.services.transmission') },
    { key: 'engine', label: t('footer.services.engine') },
    { key: 'maintenance', label: t('footer.services.maintenance') },
    { key: 'diagnostic', label: t('footer.services.diagnostic') }
  ]

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50"
    >
      {/* Main Navigation Bar with Glassmorphism Effect */}
      <motion.div 
        animate={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
        }}
        transition={{ duration: 0.3 }}
        className="w-full border-b border-white/20 shadow-lg"
        style={{
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9))'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(248, 250, 252, 0.05))'
        }}
      >
        <div className="max-w-none w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Enhanced Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="relative group">
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/logo.svg" 
                    alt="Logo" 
                    className="w-24 h-24 filter drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl" 
                  />
                </motion.div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Enhanced Center Info - Boarding Hours */}
            <div
              className={`hidden md:flex items-center space-x-8 px-4 py-2 rounded-2xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg' 
                  : 'bg-white/20 backdrop-blur-sm'
              }`}
            >
              <span className={`text-xs font-semibold ${location.pathname !== '/' ? 'text-primary-700' : (isScrolled ? 'text-blue-700' : 'text-white')}`}
                style={location.pathname !== '/' ? { color: colors.primary[700] } : {}}>
                {t('navbar.boardingHours')}: <span className={location.pathname !== '/' ? 'text-primary-600' : (isScrolled ? 'text-blue-600' : 'text-white')}
                  style={location.pathname !== '/' ? { color: colors.primary[600] } : {}}>
                  {t('navbar.boardingTime')}
                </span>
              </span>
            </div>

            {/* Enhanced Right Side - Call Us & CTA */}
            <div className="flex items-center space-x-3">
              {/* Simple Call Us */}
              <div
                className={`hidden md:flex items-center space-x-8 px-4 py-2 rounded-2xl transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg' 
                    : 'bg-white/20 backdrop-blur-sm'
                }`}
              >
                <span className={`text-xs font-semibold ${location.pathname !== '/' ? 'text-primary-700' : (isScrolled ? 'text-gray-700' : 'text-white')}`}
                  style={location.pathname !== '/' ? { color: colors.primary[700] } : {}}>
                  {t('navbar.callUs')}: <span className={location.pathname !== '/' ? 'text-primary-600' : (isScrolled ? 'text-gray-600' : 'text-white/90')}
                    style={location.pathname !== '/' ? { color: colors.primary[600] } : {}}>
                    {t('navbar.phoneNumber')}
                  </span>
                </span>
              </div>

              {/* Enhanced CTA Button */}
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 10px 30px ${colors.primary[500]}40`
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateToContact(navigate, location.pathname)}
                className="relative overflow-hidden text-white px-6 py-2 text-xs font-bold rounded-2xl transition-all duration-300 flex items-center space-x-2 shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary[600]}, ${colors.primary[800]})`
                }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">{t('navbar.makeAppointment')}</span>
                <motion.svg 
                  className="w-3 h-3 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>

              {/* Enhanced Mobile menu button */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`md:hidden p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-700' 
                    : 'bg-white/20 backdrop-blur-sm text-white'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <motion.svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Bottom Navigation Menu */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
      >
        <div className="max-w-none w-[70%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item, index) => (
                <motion.div 
                  key={item.key} 
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                >
                  {item.hasDropdown ? (
                    <div className="relative">
                      <Link
                        to="/services"
                        className="flex items-center space-x-2 text-gray-700 font-semibold py-2 px-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:shadow-lg group"
                        onMouseEnter={() => setIsServicesDropdownOpen(true)}
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      >
                        <span className="text-xs font-bold group-hover:text-blue-700 transition-colors duration-200">{item.label}</span>
                        <motion.svg 
                          animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="w-3 h-3 text-blue-600 group-hover:text-blue-700" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </Link>
                      {/* Enhanced Services Dropdown */}
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100/50 py-3 z-50 services-dropdown overflow-hidden"
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                            style={{
                              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                            }}
                          >
                            {serviceItems.map((service, serviceIndex) => (
                              <motion.div
                                key={service.key}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: serviceIndex * 0.05, duration: 0.3 }}
                              >
                                <Link
                                  to={`/services/${service.key}`}
                                  className="block px-6 py-4 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200 group relative overflow-hidden"
                                  onClick={() => setIsServicesDropdownOpen(false)}
                                >
                                  <motion.div
                                    className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                                  />
                                  <span className="group-hover:text-blue-700 group-hover:font-semibold transition-all duration-200 relative z-10">
                                    {service.label}
                                  </span>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item.key === 'blog' ? (
                    <Link
                      to="/blog"
                      className="flex items-center space-x-2 text-gray-700 font-semibold py-3 px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 hover:shadow-lg group"
                    >
                      <span className="text-sm font-bold group-hover:text-purple-800 transition-colors duration-200">{item.label}</span>
                    </Link>
                  ) : item.key === 'about' ? (
                    <Link
                      to="/about"
                      className="flex items-center space-x-2 text-gray-700 font-semibold py-3 px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:shadow-lg group"
                    >
                      <span className="text-sm font-bold group-hover:text-green-800 transition-colors duration-200">{item.label}</span>
                    </Link>
                  ) : (
                    <motion.a 
                      href={`#${item.key}`}
                      className="flex items-center space-x-2 text-gray-700 font-semibold py-3 px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:shadow-lg group"
                      whileHover={{ scale: 1.02 }}
                      onClick={(e) => {
                        if (location.pathname !== '/') {
                          e.preventDefault()
                          window.location.href = `/#${item.key}`
                        }
                      }}
                    >
                      <span className="text-sm font-bold group-hover:text-gray-800 transition-colors duration-200">{item.label}</span>
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Enhanced Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Enhanced Language Toggle Switch */}
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => changeLanguage(currentLanguage === 'fr' ? 'en' : 'fr')}
                  className="relative flex items-center justify-center w-20 h-10 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.primary[700]})`,
                    border: `2px solid ${colors.primary[600]}`
                  }}
                >
                  {/* Background flags with better positioning */}
                  <div className="absolute left-3 text-lg opacity-70 transition-opacity duration-300">
                    🇫🇷
                  </div>
                  <div className="absolute right-3 text-lg opacity-70 transition-opacity duration-300">
                    🇺🇸
                  </div>
                  
                  {/* Enhanced moving toggle */}
                  <motion.div
                    animate={{
                      x: currentLanguage === 'fr' ? -16 : 16,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute w-8 h-8 bg-white rounded-xl shadow-lg flex items-center justify-center text-lg border-2 z-10"
                    style={{ 
                      borderColor: colors.primary[600],
                      boxShadow: `0 4px 12px ${colors.primary[500]}40`
                    }}
                  >
                    <motion.span
                      key={currentLanguage}
                      initial={{ scale: 0.5, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {currentLanguage === 'fr' ? '🇫🇷' : '🇺🇸'}
                    </motion.span>
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {menuItems.map((item, index) => (
                <motion.div 
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {item.hasDropdown ? (
                    <div>
                      <Link 
                        to="/services"
                        className="flex items-center justify-between w-full text-left px-6 py-4 text-gray-700 transition-all duration-300 font-semibold rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:shadow-lg group"
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      >
                        <span className="group-hover:text-blue-700">{item.label}</span>
                        <motion.svg 
                          animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-5 h-5 text-blue-600 group-hover:text-blue-700" 
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
                            transition={{ duration: 0.3 }}
                            className="ml-4 mt-3 space-y-2 overflow-hidden"
                          >
                            {serviceItems.map((service, serviceIndex) => (
                              <motion.div
                                key={service.key}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: serviceIndex * 0.05, duration: 0.3 }}
                              >
                                <Link
                                  to={`/services/${service.key}`}
                                  className="block px-6 py-3 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 rounded-xl group"
                                  onClick={() => {
                                    setIsServicesDropdownOpen(false)
                                    setIsMenuOpen(false)
                                  }}
                                >
                                  <span className="group-hover:font-semibold transition-all duration-200">{service.label}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item.key === 'blog' ? (
                    <Link
                      to="/blog"
                      className="flex items-center justify-between w-full text-left px-6 py-4 text-gray-700 transition-all duration-300 font-semibold rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 hover:shadow-lg group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="group-hover:text-purple-800">{item.label}</span>
                    </Link>
                  ) : item.key === 'about' ? (
                    <Link
                      to="/about"
                      className="flex items-center justify-between w-full text-left px-6 py-4 text-gray-700 transition-all duration-300 font-semibold rounded-2xl hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:shadow-lg group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="group-hover:text-green-800">{item.label}</span>
                    </Link>
                  ) : (
                    <a 
                      href={`#${item.key}`}
                      className="flex items-center justify-between w-full text-left px-6 py-4 text-gray-700 transition-all duration-300 font-semibold rounded-2xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:shadow-lg group"
                      onClick={(e) => {
                        if (location.pathname !== '/') {
                          e.preventDefault()
                          window.location.href = `/#${item.key}`
                        }
                        setIsMenuOpen(false)
                      }}
                    >
                      <span className="group-hover:text-gray-800">{item.label}</span>
                    </a>
                  )}
                </motion.div>
              ))}
              
              {/* Enhanced Mobile Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="pt-6 border-t border-gray-200/50 space-y-4"
              >
                <div className="flex flex-col gap-2 px-2">
                   <div className="text-sm font-semibold"
                     style={location.pathname !== '/' ? { color: colors.primary[700] } : {}}>
                     {t('navbar.boardingHours')}: <span className="font-normal"
                       style={location.pathname !== '/' ? { color: colors.primary[600] } : {}}>
                       {t('navbar.boardingTime')}
                     </span>
                   </div>
                   <div className="text-sm font-semibold"
                     style={location.pathname !== '/' ? { color: colors.primary[700] } : {}}>
                     {t('navbar.callUs')}: <span className="font-normal"
                       style={location.pathname !== '/' ? { color: colors.primary[600] } : {}}>
                       {t('navbar.phoneNumber')}
                     </span>
                   </div>
                  <div className="text-sm font-semibold text-gray-700">
                    {t('navbar.address')}: <span className="text-gray-600 font-normal">{t('navbar.addressValue')}</span>
                  </div>
                </div>
                
                {/* Enhanced Mobile Language Toggle */}
                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl">
                  <span className="text-sm font-bold text-purple-700">{t('navbar.language')}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => changeLanguage(currentLanguage === 'fr' ? 'en' : 'fr')}
                    className="relative flex items-center justify-center w-16 h-8 rounded-xl transition-all duration-300 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.primary[700]})`,
                      border: `2px solid ${colors.primary[600]}`
                    }}
                  >
                    <div className="absolute left-2 text-sm opacity-70">🇫🇷</div>
                    <div className="absolute right-2 text-sm opacity-70">🇺🇸</div>
                    <motion.div
                      animate={{ x: currentLanguage === 'fr' ? -12 : 12 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="absolute w-6 h-6 bg-white rounded-lg shadow-md flex items-center justify-center text-sm border-2 z-10"
                      style={{ borderColor: colors.primary[600] }}
                    >
                      {currentLanguage === 'fr' ? '🇫🇷' : '🇺🇸'}
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
  