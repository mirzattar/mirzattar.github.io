import { Button } from '@c/Buttons'

import faSun from "@img/icons/sun-solid-full.svg"
import faMoon from "@img/icons/moon-solid-full.svg"
import { useState } from 'preact/hooks'
import { Theme, Themes } from '../scripts/theme'
import { forwardRef } from 'preact/compat'

const ID = "primaryThemeToggle"

export default forwardRef(function ThemeToggle(_props: never, ref) {
	const [ icon, setIcon ] = useState<string>()

	if (Theme.value === Themes.light) setIcon(faSun.src)
	if (Theme.value === Themes.dark) setIcon(faMoon.src)

	const clickHandler = () => {
		if (Theme.value === Themes.light) {
			setIcon(faMoon.src)
			Theme.value = Themes.dark
		} else {
			setIcon(faSun.src)
			Theme.value = Themes.light
		}
	}

	return <Button
		ref={ ref }
		onClick={ clickHandler }
		id={ ID }
	>
		<img src={ icon } alt="Toggle theme" />
	</Button>
})
