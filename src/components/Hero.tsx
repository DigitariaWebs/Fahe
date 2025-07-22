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
      <div className="absolute inset-0 flex items-center justify-center pt-32">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 px-5 sm:px-0 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 opacity-90 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 opacity-80 font-medium text-yellow-300 max-w-2xl mx-auto">
            {t('hero.specialization')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              style={{ backgroundColor: colors.primary[600] }}
              onClick={() => navigateToContact(navigate, location.pathname)}
            >
              {t('hero.cta.primary')}
            </motion.button>
            <Link to="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-gray-900 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
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