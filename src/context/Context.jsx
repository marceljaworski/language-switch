import { createContext, useState } from 'react'


export const LanguageContext = createContext()

function Context({children}) {
    const [language, setLenguage] = useState("Hola Mundo!")
    const [languages, setLenguages] = useState({
        spanisch: "Hola Mundo!",
        deutsch: "Hello Wellt",
    })
  return (
    <LanguageContext.Provider value={{
        language: language,
        languages: {languages}
    }}>
        {children}
    </LanguageContext.Provider>
  )
}

export default Context