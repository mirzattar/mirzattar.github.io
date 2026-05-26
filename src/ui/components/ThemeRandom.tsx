import { Button } from '@c/Buttons'

import faPaintRoller from "@img/paint-roller-solid-full.svg"

import { ACCENT_COLOR_HUE, randomHue } from '@js/accent-randomizer'
import { forwardRef } from 'preact/compat'

const ID = "randomThemeButton"

export default forwardRef(function ThemeToggle(props: any, ref) {
	const { id, onClick: userOnClick, class: userClass, className: userClassName, ...rest } = props || {}
	
	const clickHandler = (e?: Event) => {
		ACCENT_COLOR_HUE.value = randomHue()
		if (typeof userOnClick === 'function') userOnClick(e)
	}

	return <Button
		ref={ ref }
		onClick={ clickHandler }
		id={ id ?? ID }
		class={ `${userClass ?? userClassName ?? ''}` }
		{ ...rest }
	>
		<img src={ faPaintRoller.src } alt="Toggle theme" />
	</Button>
})
