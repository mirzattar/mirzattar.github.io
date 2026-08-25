import type { ComponentPropsWithoutRef, PropsWithChildren } from "react"

export default interface Props extends PropsWithChildren, ComponentPropsWithoutRef<'button'> {
	to: number | HTMLElement
}
