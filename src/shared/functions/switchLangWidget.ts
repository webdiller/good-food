export const switchLangWidget = (locale: string) => {
  let parseLocale = locale;
  if (parseLocale.toLowerCase() === "ka") parseLocale = "GE"
  if (window && typeof window !== "undefined") window.CleverFood.setLanguage(parseLocale)
}
