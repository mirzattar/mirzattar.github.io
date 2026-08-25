// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
	site: 'https://mirzattar.github.io',
	compressHTML: true,

	integrations: [
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en",
					id: "id"
				}
			}
		}),
		react()
	],

	i18n: {
		defaultLocale: "en",
		locales: [ "en", "id" ],
		routing: {
			prefixDefaultLocale: true
		}
	},

	vite: {
		plugins: [ tailwindcss() ],
	},

	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Open Sans",
			cssVariable: "--font-display",
			weights: [ "100 900" ]
		},
	]
})
