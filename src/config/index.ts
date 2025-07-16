// Configuration centralisée pour l'application

export { default as colors, getColor, primaryColors, semanticColors } from './colors'
export { default as assets, getImageUrl, getFontFamily } from './assets'

// Re-export des types utiles
export type { ColorName, ColorShade, ColorPalette } from './colors'

// Import pour l'export par défaut
import colorsConfig from './colors'
import assetsConfig from './assets'

// Configuration globale de l'application
export const appConfig = {
  name: 'Fahe App',
  version: '1.0.0',
  defaultLanguage: 'fr',
  supportedLanguages: ['fr', 'en'],
  
  // Configuration de l'interface
  ui: {
    theme: 'light', // Thème unique
    animations: true,
    reducedMotion: false,
  },
  
  // Configuration des fonctionnalités
  features: {
    i18n: true,
    analytics: false,
    errorReporting: false,
  },
  
  // Configuration de l'API
  api: {
    baseUrl: process.env.VITE_API_BASE_URL || 'http://localhost:3000',
    timeout: 10000,
  },
  
  // Configuration du cache
  cache: {
    maxAge: 1000 * 60 * 5, // 5 minutes
    maxSize: 100, // 100 entrées
  },
} as const

export default {
  colors: colorsConfig,
  assets: assetsConfig,
  app: appConfig,
}
