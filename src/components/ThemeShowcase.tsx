import React from 'react'
import { colors, getColor } from '@/config/colors'
import { icons } from '@/config/assets'
import useI18n from '@/hooks/useI18n'

interface ThemeShowcaseProps {
  className?: string
}

export const ThemeShowcase: React.FC<ThemeShowcaseProps> = ({ className }) => {
  const { t } = useI18n()

  const colorExamples = [
    { name: 'Primary', color: colors.primary.DEFAULT, textColor: 'white' },
    { name: 'Secondary', color: colors.secondary.DEFAULT, textColor: 'black' },
    { name: 'Success', color: colors.success.DEFAULT, textColor: 'white' },
    { name: 'Warning', color: colors.warning.DEFAULT, textColor: 'white' },
    { name: 'Error', color: colors.error.DEFAULT, textColor: 'white' },
    { name: 'Info', color: colors.info.DEFAULT, textColor: 'white' },
  ]

  return (
    <div className={`p-6 space-y-6 ${className}`}>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        {t('welcome')} - Aperçu du Thème
      </h2>
      
      {/* Palette de couleurs */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Palette de couleurs</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {colorExamples.map((example) => (
            <div
              key={example.name}
              className={`p-4 rounded-lg border theme-color-box ${
                example.textColor === 'white' ? 'text-white' : 'text-black'
              }`}
              data-bg-color={example.color}
            >
              <div className="font-medium">{example.name}</div>
              <div className="text-sm opacity-80">{example.color}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Icônes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Icônes système</h3>
        <div className="flex flex-wrap gap-4">
          {Object.entries(icons).slice(0, 8).map(([name, path]) => (
            typeof path === 'string' && (
              <div key={name} className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 flex items-center justify-center border rounded">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
                  </svg>
                </div>
                <span className="text-xs">{name}</span>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Boutons de démonstration */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Composants UI</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
            Bouton Principal
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md border hover:bg-opacity-90 transition-all">
            Bouton Secondaire
          </button>
          <button className="px-4 py-2 bg-success text-white rounded-md hover:opacity-90 transition-opacity">
            {t('success')}
          </button>
          <button className="px-4 py-2 bg-error text-white rounded-md hover:opacity-90 transition-opacity">
            Erreur
          </button>
        </div>
      </div>

      {/* Variables CSS */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variables CSS</h3>
        <div className="p-4 bg-muted rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-mono">
            <div>--background: <span className="text-primary">{colors.background}</span></div>
            <div>--foreground: <span className="text-primary">{colors.foreground}</span></div>
            <div>--primary: <span className="text-primary">{colors.primary.DEFAULT}</span></div>
            <div>--border: <span className="text-primary">{getColor('border')}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeShowcase
