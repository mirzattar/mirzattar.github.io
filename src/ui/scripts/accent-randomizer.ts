import { effect, signal } from "@preact/signals"
import * as globals from "@src/globals"

function getAccentHue() {
	const item = localStorage.getItem(globals.STORAGE_ACCENT_COLOR_HUE_KEY)
	return (item === null) ? null : Number(item)
}

export const ACCENT_COLOR_HUE = signal(
	getAccentHue()
	?? globals.ACCENT_COLOR_HUE_NUM
)

export function randomHue(range?: [ number, number ]): number {
	if (range) {
		if (range[ 0 ] < 0)
			range[ 0 ] = 0
		if (range[ 1 ] > 256)
			range[ 1 ] = 256

		return Math.floor(
			Math.random()
			* (range[ 1 ] - range[ 0 ] + 1))
			+ range[ 0 ]
	} else {
		return Math.floor(
			Math.random() * 1000 % 256
		)
	}
}

effect(() => {
	document.documentElement.style.setProperty(
		"--accent",
		`hsl(${ACCENT_COLOR_HUE.value}, 100%, 50%)`
	)
	localStorage.setItem(
		globals.STORAGE_ACCENT_COLOR_HUE_KEY,
		ACCENT_COLOR_HUE.value.toString()
	)
})
