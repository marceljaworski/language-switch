import { createContext, useState } from 'react'


export const LanguageContext = createContext()

function Context({children}) {
    const [language, setLanguage] = useState("Hola Mundo!")
    const [languages, setLanguages] = useState([
        {
            id: 1,
            hi: "Hola Mundo!",
        },
        {
            id: 2,
            hi: "Hallo Wellt",
        }
    ])
    console.log(language)
    const chooseLanguage = languageId => {
        console.log(languageId)
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