// Configuration des couleurs pour l'application
// Palette de couleurs unifiée sans mode sombre/clair

export const colors = {
  // Couleurs principales
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    DEFAULT: '#0ea5e9',
  },

  // Couleurs secondaires
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    DEFAULT: '#64748b',
  },

  // Couleurs d'accent
  accent: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
    DEFAULT: '#d946ef',
  },

  // Couleurs de succès
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    DEFAULT: '#22c55e',
  },

  // Couleurs d'erreur
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    DEFAULT: '#ef4444',
  },

  // Couleurs d'avertissement
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    DEFAULT: '#f59e0b',
  },

  // Couleurs d'information
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    DEFAULT: '#3b82f6',
  },

  // Couleurs neutres/grises
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    DEFAULT: '#737373',
  },

  // Couleurs de base de l'interface
  background: '#ffffff',
  foreground: '#0f172a',
  
  // Couleurs des cartes et surfaces
  card: {
    background: '#ffffff',
    border: '#e2e8f0',
  },

  // Couleurs des bordures et séparateurs
  border: '#e2e8f0',
  input: '#f1f5f9',
  ring: '#0ea5e9',

  // Couleurs des textes atténués
  muted: {
    background: '#f8fafc',
    foreground: '#64748b',
  },

  // Couleurs spéciales
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const

// Types pour TypeScript
export type ColorPalette = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  DEFAULT: string
}

export type ColorName = keyof typeof colors
export type ColorShade = keyof ColorPalette

// Fonction utilitaire pour obtenir une couleur
export const getColor = (name: ColorName, shade?: ColorShade): string => {
  const colorGroup = colors[name]
  
  if (typeof colorGroup === 'string') {
    return colorGroup
  }
  
  if (typeof colorGroup === 'object' && shade && 'DEFAULT' in colorGroup) {
    const palette = colorGroup as ColorPalette
    return palette[shade] || palette.DEFAULT
  }
  
  return '#000000'
}

// Export des couleurs les plus utilisées pour un accès rapide
export const primaryColors = {
  main: colors.primary.DEFAULT,
  light: colors.primary[300],
  dark: colors.primary[700],
}

export const semanticColors = {
  success: colors.success.DEFAULT,
  error: colors.error.DEFAULT,
  warning: colors.warning.DEFAULT,
  info: colors.info.DEFAULT,
}

export default colors
