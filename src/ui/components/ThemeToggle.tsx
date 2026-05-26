import { Button } from '@c/Buttons'

import faSun from "@img/sun-solid-full.svg"
import faMoon from "@img/moon-solid-full.svg"
import { useState } from 'preact/hooks'
import { forwardRef } from 'preact/compat'
import { Theme, Themes } from '../scripts/theme'

const ID = "primaryThemeToggle"

export default forwardRef(function ThemeToggle(props: any, ref) {
	const { id, onClick: userOnClick, class: userClass, className: userClassName, ...rest } = props || {}
	const [ icon, setIcon ] = useState<string>()
	const [ isAnimating, setIsAnimating ] = useState(false)

	if (Theme.value === Themes.light) setIcon(faSun.src)
	if (Theme.value === Themes.dark) setIcon(faMoon.src)

	const clickHandler = (e?: Event) => {
		setIsAnimating(true)
		if (Theme.value === Themes.light) {
			setIcon(faMoon.src)
			Theme.value = Themes.dark
		} else {
			setIcon(faSun.src)
			Theme.value = Themes.light
		}

		if (typeof userOnClick === 'function') userOnClick(e)
	}

	return <Button
		ref={ ref }
		onClick={ clickHandler }
		onAnimationEnd={ () => setIsAnimating(false) }
		id={ id ?? ID }
		class={ `${userClass ?? userClassName ?? ''}}` }
		{ ...rest }
	>
		<img src={ icon } alt="Toggle theme" />
	</Button>
})
