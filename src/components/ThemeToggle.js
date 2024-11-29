'use client'

import styles from './ThemeToggle.module.css'
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [ themeLight, setThemeLight ] = useState(true)

  useEffect(() => {
    setThemeLight(
      document.documentElement.getAttribute('data-theme') === 'light'
    )
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeLight ? 'light' : 'dark')
  }, [themeLight])

  return (
    <button className={styles.toggle} onClick={() => setThemeLight(!themeLight)}>
      {themeLight ? '🌖' : '🌘'}
    </button>
  )
}