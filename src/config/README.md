# Configuration du Design System

Ce dossier contient la configuration centralisée pour le design system de l'application.

## Structure

```
src/config/
├── index.ts          # Point d'entrée principal pour toutes les configs
├── colors.ts         # Palette de couleurs et utilitaires
├── assets.ts         # Configuration des assets, icônes, polices, etc.
└── README.md         # Cette documentation
```

## Utilisation

### Import depuis le point d'entrée principal

```typescript
import { colors, assets, appConfig } from '@/config'
import { getColor, primaryColors } from '@/config'
```

### Import spécifique

```typescript
import { colors, getColor } from '@/config/colors'
import { images, icons } from '@/config/assets'
```

## Configuration des couleurs (colors.ts)

### Palette de couleurs

Le système utilise une palette de couleurs cohérente avec des nuances de 50 à 900 :

```typescript
// Utilisation basique
colors.primary.DEFAULT  // #0ea5e9
colors.primary[500]     // #0ea5e9 (même que DEFAULT)
colors.primary[100]     // #e0f2fe

// Couleurs sémantiques
colors.success.DEFAULT  // #22c55e
colors.error.DEFAULT    // #ef4444
colors.warning.DEFAULT  // #f59e0b
```

### Fonction utilitaire

```typescript
// Utilisation avec la fonction getColor
const primaryColor = getColor('primary', 'DEFAULT')
const lightPrimary = getColor('primary', 200)
```

### Export rapide

```typescript
// Couleurs les plus utilisées
primaryColors.main      // #0ea5e9
primaryColors.light     // #bae6fd
primaryColors.dark      // #0369a1

// Couleurs sémantiques
semanticColors.success  // #22c55e
semanticColors.error    // #ef4444
```

## Configuration des assets (assets.ts)

### Images et icônes

```typescript
// Images
images.logos.react      // '/src/assets/react.svg'
images.placeholders.avatar  // '/src/assets/placeholder-avatar.svg'

// Icônes SVG (paths pour les icônes)
icons.home             // 'M3 12l2-2m0 0l7-7...'
icons.edit             // 'M11 4H4a2 2 0 00-2 2v14...'
```

### Polices

```typescript
fonts.primary.name     // 'Inter'
fonts.primary.fallback // 'system-ui, Avenir, Helvetica, Arial, sans-serif'

// Utilisation avec la fonction utilitaire
getFontFamily('primary') // '"Inter", system-ui, Avenir, Helvetica, Arial, sans-serif'
```

### Autres configurations

```typescript
spacing.md             // '1rem'
borderRadius.lg        // '0.5rem'
shadows.md             // '0 4px 6px -1px rgb(0 0 0 / 0.1)...'
transitions.normal     // '250ms ease-in-out'
breakpoints.md         // '768px'
zIndex.modal           // 1400
```

## Thème unique

L'application utilise un thème unique (clair) sans basculement mode sombre/clair. Les couleurs sont optimisées pour une excellente lisibilité et accessibilité.

### Variables CSS

Les couleurs sont définies comme variables CSS dans `src/index.css` :

```css
:root {
  --background: #ffffff;
  --foreground: #0f172a;
  --primary: #0ea5e9;
  --border: #e2e8f0;
  /* ... */
}
```

## Configuration de l'application (appConfig)

```typescript
appConfig.name                    // 'Fahe App'
appConfig.defaultLanguage         // 'fr'
appConfig.ui.theme               // 'light'
appConfig.features.i18n          // true
appConfig.api.baseUrl            // process.env.VITE_API_BASE_URL || 'http://localhost:3000'
```

## Bonnes pratiques

1. **Utilisation des couleurs** : Toujours utiliser les couleurs depuis la configuration plutôt que des valeurs hardcodées
2. **Cohérence** : Utiliser les espacements, rayons et ombres prédéfinis
3. **Accessibilité** : Les couleurs respectent les ratios de contraste WCAG
4. **Maintenance** : Centraliser toutes les configurations pour faciliter les modifications

## Exemple d'utilisation complète

```typescript
import React from 'react'
import { colors, getColor, icons } from '@/config'

const MyComponent = () => {
  return (
    <div 
      className="p-4 rounded-lg"
      style={{ 
        backgroundColor: getColor('primary', 50),
        borderColor: getColor('primary', 200)
      }}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path d={icons.home} />
      </svg>
      <span style={{ color: colors.primary.DEFAULT }}>
        Accueil
      </span>
    </div>
  )
}
```

## Variables d'environnement

Certaines configurations peuvent être surchargées via les variables d'environnement :

- `VITE_API_BASE_URL` : URL de base de l'API
- D'autres variables peuvent être ajoutées selon les besoins
