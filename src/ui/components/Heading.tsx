import type { HTMLAttributes } from "preact"
import "./Heading.css"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	level: 1 | 2 | 3 | 4 | 5 | 6
	emphasis?: boolean
	children: any
}

export default function Heading(props: HeadingProps) {
	const { level, emphasis, children, ...passProps } = props

	switch (level) {
		case 1:
			return (
				<h1 class={ emphasis ? "emphasis" : "" } { ...passProps }>
					{ children }
				</h1>
			)

		case 2:
			return (
				<h2 class={ emphasis ? "emphasis" : "" } { ...passProps }>
					{ children }
				</h2>
			)

		case 3:
			return (
				<h3 class={ emphasis ? "emphasis" : "" } { ...passProps }>
					{ children }
				</h3>
			)

		case 4:
			return (
				<h4 class={ emphasis ? "emphasis" : "" } { ...passProps }>
					{ children }
				</h4>
			)

		case 5:
			return (
				<h5 class={ emphasis ? "emphasis" : "" } { ...passProps }>
					{ children }
				</h5>
			)

		case 6:
			return (
				<h6 class={ emphasis ? "emphasis" : "" } { ...passProps }>
					{ children }
				</h6>
			)

	}
}
