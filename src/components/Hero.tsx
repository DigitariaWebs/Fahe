import { useTranslation } from 'react-i18next'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { videos } from '../config/assets'
import { Button } from './ui/button'
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
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-80 font-medium text-yellow-300">
            {t('hero.specialization')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#05299E] hover:bg-[#041f7d] text-white px-8 py-3"
              onClick={() => navigateToContact(navigate, location.pathname)}
            >
              {t('hero.cta.primary')}
            </Button>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-[#05299E] hover:bg-white hover:text-black px-8 py-3"
              >
                {t('hero.cta.secondary')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}