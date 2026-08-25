export const Languages = Object.freeze({
	en: "English",
	id: "Bahasa Indonesia"
})

export type TLanguageCodes = keyof typeof Languages
export type TLanguageNames = (typeof Languages)[ keyof typeof Languages ]

export const LanguageCodes = Object.keys(Languages) as TLanguageCodes[]
export const LanguageNames = Object.values(Languages) as TLanguageNames[]

export const DefaultLangName: TLanguageNames = Languages.id
export const DefaultLangCode: TLanguageCodes = "id"

export type PathWithLang = `/${TLanguageCodes}/${string}`

export const getPathLang = (path: string): TLanguageCodes | null => {
	if (path.startsWith("/en")) return "en"
	if (path.startsWith("/id")) return "id"
	return null
}

export const getUserLanguage = (): TLanguageCodes | null => {
	if (navigator.language.startsWith("en")) return "en"
	if (navigator.language.startsWith("id")) return "id"
	return null
}
