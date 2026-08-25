import CardStyles from "@c/Card/styles"
import { cva } from "class-variance-authority"

export default {
	Hero: cva("flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 items-center-safe px-8 lg:justify-items-center-safe gap-4 max-w-xl lg:max-w-7xl mx-auto lg:min-h-100 my-[20svh] lg:my-[30svh]"),
	Projects: cva(""),
}
