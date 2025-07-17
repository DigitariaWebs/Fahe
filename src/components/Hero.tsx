import { useTranslation } from 'react-i18next'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { videos } from '../config/assets'
import { colors } from '../config/colors'
import { navigateToContact } from '../utils/navigation'

export default function Hero() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <section className="relative h-screen w-full overflow-hidden m-0 p-0 box-border">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videos.hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-5 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-5 sm:px-0 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 opacity-90 max-w-4xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 opacity-80 font-medium text-yellow-300 max-w-3xl mx-auto">
            {t('hero.specialization')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              style={{ backgroundColor: colors.primary[600] }}
              onClick={() => navigateToContact(navigate, location.pathname)}
            >
              {t('hero.cta.primary')}
            </motion.button>
            <Link to="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-gray-900 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                {t('hero.cta.secondary')}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}