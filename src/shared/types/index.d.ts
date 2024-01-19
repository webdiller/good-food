declare global {
  interface Window {
    CleverFood: {
      setLanguage: (language: string) => void
    }
  }
}

export {}
