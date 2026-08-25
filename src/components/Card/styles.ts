import { cva } from "class-variance-authority"

export default cva("lg:max-w-fit flex justify-center items-center p-5 rounded-lg text-center", {
	variants: {
		variant: {
			default: "border border-gray-800",
			title: "bg-blue-800",
			emphasis: "bg-blue-900",
			dim: "backdrop-brightness-80 border border-gray-800"
		}
	},
	defaultVariants: {
		variant: "default"
	}
})
