import React from 'react'
import { Button } from '@/components/ui/button'
import useI18n from '@/hooks/useI18n'

interface LanguageSelectorProps {
  className?: string
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const { changeLanguage, currentLanguage, availableLanguages } = useI18n()

  return (
    <div className={`flex gap-2 ${className}`}>
      {availableLanguages.map((language) => (
        <Button
          key={language.code}
          variant={currentLanguage === language.code ? "default" : "outline"}
          size="sm"
          onClick={() => changeLanguage(language.code)}
          className={`flex items-center gap-2 ${
            currentLanguage === language.code 
              ? "bg-[#05299E] hover:bg-[#041f7d] text-white border-[#05299E]" 
              : "bg-white border-white text-gray-700 hover:bg-gray-50 hover:text-[#05299E]"
          }`}
        >
          <span>{language.flag}</span>
          <span>{language.name}</span>
        </Button>
      ))}
    </div>
  )
}

export default LanguageSelector
