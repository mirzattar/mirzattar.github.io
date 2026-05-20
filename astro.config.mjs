// @ts-check
import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://mirzattar.github.io',
	integrations: [
		preact({
			compat: true
		}),
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en",
					id: "id"
				}
			}
		})
	],
	i18n: {
		locales: ["en", "id"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: true
		}
	},
})
