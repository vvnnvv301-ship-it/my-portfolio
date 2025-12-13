"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'uz' | 'ru'

// Define a recursive type for translations
type TranslationValue = string | { [key: string]: TranslationValue }

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => TranslationValue
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('uz')
    const [translations, setTranslations] = useState<Record<string, TranslationValue>>({})

    useEffect(() => {
        // Load saved language from localStorage
        const saved = localStorage.getItem('language') as Language
        if (saved && ['en', 'uz', 'ru'].includes(saved)) {
            setLanguageState(saved)
        }
    }, [])

    useEffect(() => {
        // Load translations for current language
        import(`@/lib/translations/${language}.json`)
            .then(module => setTranslations(module.default))
            .catch(err => console.error('Failed to load translations:', err))
    }, [language])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('language', lang)
    }

    const t = (key: string): TranslationValue => {
        const keys = key.split('.')
        let value: TranslationValue = translations

        for (const k of keys) {
            if (typeof value === 'object' && value !== null && k in value) {
                value = value[k]
            } else {
                return key
            }
        }

        return value || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider')
    }
    return context
}
