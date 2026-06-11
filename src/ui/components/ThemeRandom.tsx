import { Button } from '@c/Buttons'

import faPaintRoller from "@img/icons/paint-roller-solid-full.svg"

import { ACCENT_COLOR_HUE, randomHue } from '@js/accent-randomizer'
import { forwardRef } from 'preact/compat'

const ID = "randomThemeButton"

export default forwardRef(function ThemeToggle(_props: never, ref) {
	const clickHandler = () => {
		ACCENT_COLOR_HUE.value = randomHue()
	}

	return <Button
		ref={ ref }
		onClick={ clickHandler }
		id={ ID }
	>
		<img src={ faPaintRoller.src } alt="Toggle theme" />
	</Button>
})
