import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Types pour TypeScript
import './types'

// Importation des traductions
import enTranslations from './locales/en.json'
import frTranslations from './locales/fr.json'

// Configuration des ressources de traduction
const resources = {
  en: {
    translation: enTranslations
  },
  fr: {
    translation: frTranslations
  }
}

i18n
  // Détection automatique de la langue
  .use(LanguageDetector)
  // Passe l'instance i18n à react-i18next
  .use(initReactI18next)
  // Initialise i18next
  .init({
    resources,
    
    // Langue par défaut
    fallbackLng: 'fr',
    
    // Langue par défaut si aucune traduction n'est trouvée
    lng: 'fr',
    
    // Options pour la détection de langue
    detection: {
      // Ordre de détection : localStorage, navigator, htmlTag
      order: ['localStorage', 'navigator', 'htmlTag'],
      
      // Clé pour le stockage local
      lookupLocalStorage: 'i18nextLng',
      
      // Cache la langue détectée
      caches: ['localStorage'],
    },
    
    interpolation: {
      // React échappe déjà les valeurs par défaut
      escapeValue: false
    },
    
    // Configuration pour le développement
    debug: process.env.NODE_ENV === 'development',
    
    // Configuration des namespaces
    defaultNS: 'translation',
    
    // Retour en arrière pour les clés manquantes
    keySeparator: '.',
    nsSeparator: ':',
  })

export default i18n
