import { effect, Signal, signal } from "@preact/signals"
import * as globals from "@src/globals"

const matchLangStrToEnum = (str: string | null, dflt?: globals.LocaleCodes): globals.LocaleCodes => {
	switch (str) {
		case globals.LocaleCodes.EN:
			return globals.LocaleCodes.EN

		case globals.LocaleCodes.ID:
			return globals.LocaleCodes.ID

		default:
			return dflt ?? globals.LocaleCodes.EN
	}
}

export const getUserLang = (): globals.LocaleCodes => {
	return matchLangStrToEnum(navigator.language.substring(0, 2))
}

export const getLang = (): globals.LocaleCodes => {
	return matchLangStrToEnum(localStorage.getItem(globals.STORAGE_LANGUAGE_KEY))
}

if (localStorage.getItem(globals.STORAGE_LANGUAGE_KEY) === null)
	localStorage.setItem(globals.STORAGE_LANGUAGE_KEY, getUserLang())

export const Language: Signal<globals.LocaleCodes> = signal(getLang())

effect(() => {
	localStorage.setItem(globals.STORAGE_LANGUAGE_KEY, Language.value)
})
