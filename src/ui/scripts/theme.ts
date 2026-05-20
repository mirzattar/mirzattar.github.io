import { effect, Signal, signal } from "@preact/signals"

const STORAGE_THEME_KEY = "theme"

export enum Themes {
	light,
	dark
}

export const getUserTheme = () => {
	return matchMedia("(prefers-color-scheme: light)").matches
		? Themes.light
		: Themes.dark
}

export const getTheme = () => {
	return localStorage.getItem(STORAGE_THEME_KEY) === Themes[Themes.light]
		? Themes.light
		: Themes.dark
}

if (localStorage.getItem(STORAGE_THEME_KEY) === null)
	localStorage.setItem(STORAGE_THEME_KEY, Themes[getUserTheme()])

export const Theme: Signal<Themes> = signal(getTheme());

(document.documentElement as HTMLElement).dataset.theme = Themes[Theme.value]

effect(() => {
	localStorage.setItem(STORAGE_THEME_KEY, Themes[Theme.value]);
	(document.documentElement as HTMLElement).dataset.theme = Themes[Theme.value]
})
