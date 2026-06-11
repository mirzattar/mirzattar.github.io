import type { HTMLAttributes } from "preact"
import "./Heading.css"

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	level: 1 | 2 | 3 | 4 | 5 | 6
	children: any
}

export default function Heading(props: Props) {
	const { level, children, ...passProps } = props

	switch (level) {
		case 1:
			return (
				<h1 class={ props.class } { ...passProps }>
					{ children }
				</h1>
			)

		case 2:
			return (
				<h2 class={ props.class } { ...passProps }>
					{ children }
				</h2>
			)

		case 3:
			return (
				<h3 class={ props.class } { ...passProps }>
					{ children }
				</h3>
			)

		case 4:
			return (
				<h4 class={ props.class } { ...passProps }>
					{ children }
				</h4>
			)

		case 5:
			return (
				<h5 class={ props.class } { ...passProps }>
					{ children }
				</h5>
			)

		case 6:
			return (
				<h6 class={ props.class } { ...passProps }>
					{ children }
				</h6>
			)

	}
}
