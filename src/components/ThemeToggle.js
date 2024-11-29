'use client'

import { ThemeContext, ThemeProvider } from '@/contexts/ThemeContext.js'
import styles from './ThemeToggle.module.css'
import { useContext } from "react"

export default function ThemeToggle() {
  const { themeLight, setThemeLight } = useContext(ThemeContext)

  return (
    <button className={styles.toggle} onClick={() => setThemeLight(!themeLight)}>
      {themeLight ? '🌖' : '🌘'}
    </button>
  )
}