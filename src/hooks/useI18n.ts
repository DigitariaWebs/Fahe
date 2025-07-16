import { useTranslation } from 'react-i18next'

export const useI18n = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const currentLanguage = i18n.language

  const availableLanguages = [
    { code: 'fr', name: t('french'), flag: '🇫🇷' },
    { code: 'en', name: t('english'), flag: '🇺🇸' }
  ]

  return {
    t,
    changeLanguage,
    currentLanguage,
    availableLanguages,
    isReady: i18n.isInitialized
  }
}

export default useI18n
