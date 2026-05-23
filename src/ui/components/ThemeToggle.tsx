import { Button } from '@c/Buttons'

import faSun from "@img/sun-solid-full.svg"
import faMoon from "@img/moon-solid-full.svg"
import { useState } from 'preact/compat'
import { Theme, Themes } from '../scripts/theme'

const ID = "primaryThemeToggle"

export default function ThemeToggle() {
	const [icon, setIcon] = useState<string>()
	const [isAnimating, setIsAnimating] = useState(false)

	if (Theme.value === Themes.light) setIcon(faSun.src)
	if (Theme.value === Themes.dark) setIcon(faMoon.src)

	const clickHandler = () => {
		setIsAnimating(true)
		if (Theme.value === Themes.light) {
			setIcon(faMoon.src)
			Theme.value = Themes.dark
		} else {
			setIcon(faSun.src)
			Theme.value = Themes.light
		}
	}

	return <Button
		onClick={ clickHandler }
		onAnimationEnd={ () => setIsAnimating(false) }
		id={ ID }
		class={ `btn ${isAnimating ? 'btn-push-anim' : ''}` }
	>
		<img src={ icon } alt="Toggle theme" id={ ID } />
	</Button>

	// return "a"
}
