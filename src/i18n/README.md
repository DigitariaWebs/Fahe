# Configuration React i18next

Ce projet utilise React i18next pour l'internationalisation avec support du français et de l'anglais.

## Structure des fichiers

```
src/
  i18n/
    index.ts          # Configuration principale de i18next
    types.ts          # Types TypeScript pour les traductions
    locales/
      en.json         # Traductions anglaises
      fr.json         # Traductions françaises
  hooks/
    useI18n.ts        # Hook personnalisé pour i18n
  components/
    LanguageSelector.tsx # Composant de sélection de langue
```

## Utilisation

### Hook useI18n

```tsx
import useI18n from '@/hooks/useI18n'

function MyComponent() {
  const { t, changeLanguage, currentLanguage, availableLanguages } = useI18n()
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('en')}>
        English
      </button>
    </div>
  )
}
```

### Traduction directe avec useTranslation

```tsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  
  return <h1>{t('hello')}</h1>
}
```

### Composant LanguageSelector

```tsx
import LanguageSelector from '@/components/LanguageSelector'

function Header() {
  return (
    <header>
      <LanguageSelector className="ml-auto" />
    </header>
  )
}
```

## Ajouter de nouvelles traductions

1. Ajoutez la clé dans `src/i18n/locales/en.json`
2. Ajoutez la traduction correspondante dans `src/i18n/locales/fr.json`
3. Utilisez la clé avec `t('your_key')` dans vos composants

## Configuration

La configuration se trouve dans `src/i18n/index.ts` et inclut :

- Détection automatique de la langue basée sur le localStorage et le navigateur
- Langue par défaut : français (`fr`)
- Langues supportées : français (`fr`) et anglais (`en`)
- Cache de la langue sélectionnée dans le localStorage

## Fonctionnalités

- ✅ Détection automatique de la langue
- ✅ Persistance de la langue sélectionnée
- ✅ Support TypeScript avec auto-complétion
- ✅ Composant de sélection de langue avec drapeaux
- ✅ Hook personnalisé pour faciliter l'utilisation
- ✅ Traductions pour les éléments UI communs
