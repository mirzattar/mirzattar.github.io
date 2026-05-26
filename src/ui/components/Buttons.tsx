import { Button as BaseUIButton } from '@base-ui/react/button'
import "./Button.css"
import * as globals from '@src/globals'
import { forwardRef } from 'preact/compat'

interface ButtonProps extends BaseUIButton.Props {
}

export const Button = forwardRef<any, ButtonProps>((props, ref) => {
	const { className, children, ...passProps } = props

	return (
		<BaseUIButton ref={ ref } className={ `btn ${className}` } { ...passProps }>
			{ children }
		</BaseUIButton>
	)
})

interface IconButtonProps extends ButtonProps {
	icon: globals.PageImage
}

export const IconButton = forwardRef<any, IconButtonProps>((props, ref) => {
	const { icon, className, children, ...passProps } = props

	return (
		<Button ref={ ref } className={ `btn btn-icon ${className}` } { ...passProps }>
			<img src={ icon.src } alt="Icon" />
			{ children }
		</Button>
	)
})

interface LinkButtonProps extends ButtonProps {
	href: string
}

export function LinkButton(props: LinkButtonProps) {
	const { href, className, children, ...passProps } = props

	return (
		<a href={ href }>
			<Button className={ `btn btn-link ${className}` } { ...passProps }>

			</Button>
		</a>
	)
}
