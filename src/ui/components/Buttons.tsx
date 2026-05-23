import { Button as BaseUIButton } from '@base-ui/react/button'
import "./Button.css"
import * as globals from '@src/globals'

interface ButtonProps extends BaseUIButton.Props {
}

export function Button(props: ButtonProps) {
	const { className, children, ...passProps } = props

	return (
		<BaseUIButton className={ `btn ${className}` } { ...passProps }>
			{ children }
		</BaseUIButton>
	)
}

interface IconButtonProps extends ButtonProps {
	icon: globals.PageImage
}

export function IconButton(props: IconButtonProps) {
	const { icon, className, children, ...passProps } = props

	return (
		<Button className={ `btn btn-icon ${className}` } { ...passProps }>
			<img src={ icon.src } alt="Icon" />
			{ children }
		</Button>
	)
}

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
