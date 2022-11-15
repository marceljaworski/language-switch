import React from 'react'
import { useContext } from "react";
import { LanguageContext } from '../context/Context'
function Content() {
    const { language } = useContext(LanguageContext)
  return (
    <main>
      <h1>{language.hi}</h1>
    </main>
  )
}

export default Content