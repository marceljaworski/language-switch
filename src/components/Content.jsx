import React from 'react'
import { useContext } from "react";
import { LanguageContext } from '../context/Context'
function Content() {
    const { language } = useContext(LanguageContext)
  return (
    <>
    <h1>{language}</h1>
   </>
  )
}

export default Content