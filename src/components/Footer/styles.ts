import { cva } from "class-variance-authority"

export default {
	Footer: cva("p-6"),
	FooterInnerContainer: cva("max-w-[75dvw] lg:max-w-3xl mx-auto rounded-lg flex flex-col lg:flex-row text-center gap-4 lg:gap-8 p-8 items-center content-evenly"),
	FooterChildren: cva("transition-[margin-inline] lg:first:hover:me-8 lg:last:hover:ms-8"),
	Hr: cva("border-0 bg-gray-500 p-[0.1px] w-1/2 min-h-full flex-1")
}
