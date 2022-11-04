import { useState } from "react"

export function useDarkMode() {
  let initialTheme = JSON.parse(localStorage.getItem("darkmode"))
  const [darkmode, setDarkmode] = useState(initialTheme)

  const toggleTheme = () => {
    localStorage.setItem("darkmode", !darkmode)
    setDarkmode(!darkmode)
  }

  if (darkmode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return {
    darkmode,
    toggleTheme
  }
}