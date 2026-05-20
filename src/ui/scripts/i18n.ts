import { effect, Signal, signal } from "@preact/signals"
import { LocaleCodes } from "@src/globals"

const STORAGE_LANGUAGE_KEY = "lang"

const matchLangStrToEnum = (str: string | null, dflt?: LocaleCodes): LocaleCodes => {
	switch (str) {
		case LocaleCodes.EN:
			return LocaleCodes.EN

		case LocaleCodes.ID:
			return LocaleCodes.ID

		default:
			return dflt ?? LocaleCodes.EN
	}
}

export const getUserLang = (): LocaleCodes => {
	return matchLangStrToEnum(navigator.language.substring(0, 2))
}

export const getLang = (): LocaleCodes => {
	return matchLangStrToEnum(localStorage.getItem(STORAGE_LANGUAGE_KEY))
}

if (localStorage.getItem(STORAGE_LANGUAGE_KEY) === null)
	localStorage.setItem(STORAGE_LANGUAGE_KEY, getUserLang())

export const Language: Signal<LocaleCodes> = signal(getLang())

effect(() => {
	localStorage.setItem(STORAGE_LANGUAGE_KEY, Language.value)
})
