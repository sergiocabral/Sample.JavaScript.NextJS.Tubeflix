'use client'

import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [ themeLight, setThemeLightValue ] = useState(true)

  useEffect(() => {
    setThemeLight(
      localStorage.getItem('data-theme') === 'light' ||
      document.documentElement.getAttribute('data-theme') === 'light'
    )
  }, [])

  function setThemeLight(mode) {
    localStorage.setItem('data-theme', mode ? 'light' : 'dark')
    document.documentElement.setAttribute('data-theme', mode ? 'light' : 'dark')
    setThemeLightValue(mode)
  }

  return (
    <ThemeContext.Provider value={{ themeLight, setThemeLight }}>
      {children}
    </ThemeContext.Provider>
  )
}