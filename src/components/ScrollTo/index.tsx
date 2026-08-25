import type Props from "./interface"

export default function ScrollTo(props: Props) {
	const scrollTo = (destination: Props[ "to" ]) => {
		console.debug(`Scrolling to ${destination}`);

		(typeof destination === "number") ? window.scrollTo({
			top: destination,
			behavior: "smooth"
		}) : destination.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center"
		})
	}

	return (
		<button onClick={ () => scrollTo(props.to) } { ...props }>{ props.children }</button>
	)
}
