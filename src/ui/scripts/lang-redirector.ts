import { getUserLang } from "@js/i18n"

const currentURL = new URL(window.location.href)

if (currentURL.pathname.split("/")[ 1 ]?.length !== 2) {
	const replacementURL = `${currentURL.origin}/${getUserLang()}${(currentURL.pathname.length > 1) ? currentURL.pathname : ""}`

	console.info("Redirecting to:", replacementURL)
	window.location.replace(replacementURL)
}
