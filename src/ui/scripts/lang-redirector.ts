import { getUserLang } from "@js/i18n"

const currentURL = new URL(window.location.href)
const hasPath = currentURL.pathname.at(0) !== "/"

window.location.replace(
	`${currentURL.origin}/${getUserLang()}${hasPath ? currentURL.pathname : ""}`
)
