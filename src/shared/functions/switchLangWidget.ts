export const switchLangWidget = (locale: string) => {
  if (window && typeof window !== "undefined") window.CleverFood.setLanguage(locale)
}
