import { useTranslation } from 'react-i18next'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.svg" alt="FAHE Garage Logo" className="w-24 h-24" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#facebook" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#05299E] rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#google" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#05299E] rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Google"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">{t('footer.contact.title')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#05299E] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">{t('footer.contact.address')}</p>
                  <p className="text-gray-400 text-xs">{t('footer.contact.city')}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#05299E] flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">{t('footer.contact.phone')}</p>
                  <p className="text-gray-400 text-xs">{t('footer.contact.phone_label')}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#05299E] flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">{t('footer.contact.email')}</p>
                  <p className="text-gray-400 text-xs">{t('footer.contact.email_label')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">{t('footer.hours.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#05299E] flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">{t('footer.hours.weekdays')}</p>
                  <p className="text-gray-400 text-xs">{t('footer.hours.weekdays_time')}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">{t('footer.hours.saturday')}</p>
                  <p className="text-gray-400 text-xs">{t('footer.hours.saturday_time')}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">{t('footer.hours.sunday')}</p>
                  <p className="text-red-400 text-xs">{t('footer.hours.closed')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">{t('footer.services.title')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#transmission" className="text-gray-300 hover:text-[#05299E] text-sm transition-colors duration-300">
                  {t('footer.services.transmission')}
                </a>
              </li>
              <li>
                <a href="#engine" className="text-gray-300 hover:text-[#05299E] text-sm transition-colors duration-300">
                  {t('footer.services.engine')}
                </a>
              </li>
              <li>
                <a href="#maintenance" className="text-gray-300 hover:text-[#05299E] text-sm transition-colors duration-300">
                  {t('footer.services.maintenance')}
                </a>
              </li>
              <li>
                <a href="#diagnostic" className="text-gray-300 hover:text-[#05299E] text-sm transition-colors duration-300">
                  {t('footer.services.diagnostic')}
                </a>
              </li>
              <li>
                <a href="#bodywork" className="text-gray-300 hover:text-[#05299E] text-sm transition-colors duration-300">
                  {t('footer.services.bodywork')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 {t('footer.brand')}. {t('footer.rights')}
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-[#05299E] text-sm transition-colors duration-300">
                {t('footer.privacy')}
              </a>
              <a href="#terms" className="text-gray-400 hover:text-[#05299E] text-sm transition-colors duration-300">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
