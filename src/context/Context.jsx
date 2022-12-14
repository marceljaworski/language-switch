import { createContext, useState } from 'react'
export const LanguageContext = createContext()
const languages = [
    {
        id: 1,
        hi: "Hola mundo!",
    },
    {
        id: 2,
        hi: "Hallo Welt!",
    },
    {
        id: 3,
        hi: "Hello world!",
    },
    {
        id: 4,
        hi: "Salut Monde!",
    }
]
function Context({children}) {
    const [language, setLanguage] = useState({
        id: 1,
        hi: "Hola Mundo!",
    })
    const chooseLanguage = languageId => {
        setLanguage(languages.find(language => language.id === +languageId))
    }
    
  return (
    <LanguageContext.Provider value={{
        language: language,
        chooseLanguage: chooseLanguage,
    }}>
        {children}
    </LanguageContext.Provider>
  )
}

export default Context