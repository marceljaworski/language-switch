import { createContext, useState } from 'react'


export const LanguageContext = createContext()

function Context({children}) {
    const [language, setLanguage] = useState({
        id: 1,
        hi: "Hola Mundo!",
    })
    const [languages] = useState([
        {
            id: 1,
            hi: "Hola Mundo!",
        },
        {
            id: 2,
            hi: "Hallo Welt!",
        },
        {
            id: 3,
            hi: "Hello World!",
        },
        {
            id: 4,
            hi: "Salut Monde!",
        }
    ])
    
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