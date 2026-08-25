export namespace STRINGS {
	export const SiteName = "mirzattar" as const
	export type PageTitleFormat = `${string} - ${typeof SiteName}`
	export function title(text: TemplateStringsArray | string): PageTitleFormat {
		return `${text} - ${SiteName}`
	}

	export namespace Pages {
		export enum NotFound {
			Title = "404"
		}
	}
}
