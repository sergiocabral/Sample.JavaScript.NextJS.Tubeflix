'use client'

import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [ themeLight, setThemeLightValue ] = useState(true)

  useEffect(() => {
    setThemeLight(
      document.documentElement.getAttribute('data-theme') === 'light'
    )
  }, [])

  function setThemeLight(mode) {
    document.documentElement.setAttribute('data-theme', mode ? 'light' : 'dark')
    setThemeLightValue(mode)
  }

  return (
    <ThemeContext.Provider value={{ themeLight, setThemeLight }}>
      {children}
    </ThemeContext.Provider>
  )
}