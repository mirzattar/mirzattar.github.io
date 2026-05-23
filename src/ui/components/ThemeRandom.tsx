import { Button } from '@c/Buttons'

import faPaintRoller from "@img/paint-roller-solid-full.svg"
import { ACCENT_COLOR_HUE, randomHue } from '@js/accent-randomizer'

const ID = "randomThemeButton"

export default function ThemeToggle() {
	const clickHandler = () => {
		ACCENT_COLOR_HUE.value = randomHue()
	}

	return <Button
		onClick={ clickHandler }
		id={ ID }
		class="btn"
	>
		<img src={ faPaintRoller.src } alt="Toggle theme" id={ ID } />
	</Button>

	// return "a"
}
