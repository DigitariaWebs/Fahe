// Configuration des assets et ressources pour l'application

// Images et icônes
export const images = {
  logos: {
    react: '/src/assets/react.svg',
    vite: '/vite.svg',
  },
  
  // Placeholders et images par défaut
  placeholders: {
    avatar: '/src/assets/placeholder-avatar.svg',
    image: '/src/assets/placeholder-image.svg',
    banner: '/src/assets/placeholder-banner.svg',
  },
  
  // Illustrations
  illustrations: {
    empty: '/src/assets/illustrations/empty-state.svg',
    error: '/src/assets/illustrations/error.svg',
    success: '/src/assets/illustrations/success.svg',
    loading: '/src/assets/illustrations/loading.svg',
  },

  image: {
    mecano: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano.jpg',
    mecano1 : 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_1.jpg',
    mecano3: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_3.jpg',
    mecano4: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_4.jpg',
    mecano5: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_5.jpg',
    mecano6: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_6.jpg',
    mecano7: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_7.jpg',
    mecano8: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_8.jpg',
    mecano9: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_9.jpg',
    mecano10: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_10.jpg',
    mecano11: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_11.jpg',
    mecano12: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_12.jpg',
    mecano13: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_13.jpg',
    mecano14: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_14.jpg',
    mecano15: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_15.jpg',
    mecano16: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_16.jpg',
    mecano17: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_17.jpg',
    mecano18: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_18.jpg',
    mecano19: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_19.jpg',
    mecano20: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_20.jpg',
    mecano21: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_21.jpg',
    mecano22: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_22.jpg',
    mecano23: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_23.jpg',
    mecano24: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_24.jpg',
    mecano25: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_25.jpg',
    mecano26: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_26.jpg',
    mecano27: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_27.jpg',
    mecano28: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_28.jpg',
    mecano29: 'https://storage.googleapis.com/works23/fahe/Me%CC%81cano_29.jpg',
  },
  
  // Service images
  services: {
    mechanical: '/images/Mécano_1.jpg',
    transmission: '/images/Mécano_3.jpg',
    engine: '/images/Mécano_5.jpg',
    transmissionRebuild: '/images/Mécano_7.jpg',
    diagnostic: '/images/Mécano_9.jpg',
    bodywork: '/images/Mécano_11.jpg',
  },
} as const

// Vidéos
export const videos = {
  hero: '/video.mp4',
} as const

// Icônes système (pour les icônes SVG inline)
export const icons = {
  // Navigation
  home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M6 18L18 6M6 6l12 12',
  
  // Actions
  edit: 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7',
  delete: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
  save: 'M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z',
  copy: 'M8 4v12a2 2 0 002 2h8a2 2 0 002-2V7.5L15.5 3H10a2 2 0 00-2 2z',
  
  // États
  loading: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z',
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  
  // Interface
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  filter: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z',
  sort: 'M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12',
  settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
  
  // Médias sociaux (drapeaux emoji pour les langues)
  flags: {
    fr: '🇫🇷',
    en: '🇺🇸',
    es: '🇪🇸',
    de: '🇩🇪',
    it: '🇮🇹',
  },
} as const

// Polices
export const fonts = {
  primary: {
    name: 'Inter',
    weights: [300, 400, 500, 600, 700],
    fallback: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  
  secondary: {
    name: 'JetBrains Mono',
    weights: [400, 500, 600],
    fallback: 'Consolas, Monaco, "Courier New", monospace',
  },
  
  heading: {
    name: 'Poppins',
    weights: [400, 500, 600, 700, 800],
    fallback: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
} as const

// Tailles et espacements
export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px
} as const

// Rayons de bordure
export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const

// Ombres
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: '0 0 #0000',
} as const

// Transitions et animations
export const transitions = {
  fast: '150ms ease-in-out',
  normal: '250ms ease-in-out',
  slow: '350ms ease-in-out',
  
  // Courbes d'animation personnalisées
  easing: {
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const

// Points de rupture responsifs
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// Z-index pour la gestion des couches
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const

// Configuration globale des assets
export const assetConfig = {
  // Chemin de base pour les assets
  basePath: '/src/assets',
  
  // Formats d'images supportés
  supportedImageFormats: ['jpg', 'jpeg', 'png', 'svg', 'webp', 'avif'],
  
  // Taille maximale des uploads (en octets)
  maxFileSize: 5 * 1024 * 1024, // 5MB
  
  // Optimisation des images
  imageOptimization: {
    quality: 85,
    progressive: true,
    webp: true,
  },
} as const

// Fonctions utilitaires
export const getImageUrl = (path: string): string => {
  return `${assetConfig.basePath}/${path}`
}

export const getFontFamily = (fontName: keyof typeof fonts): string => {
  const font = fonts[fontName]
  return `"${font.name}", ${font.fallback}`
}

// Export par défaut
export default {
  images,
  videos,
  icons,
  fonts,
  spacing,
  borderRadius,
  shadows,
  transitions,
  breakpoints,
  zIndex,
  assetConfig,
}
