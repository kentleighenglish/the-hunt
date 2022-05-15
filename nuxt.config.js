export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "The Hunt",
		htmlAttrs: {
			lang: "en"
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, maximum-scale=1"
			},
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
			{ name: "theme-color", content: "#142833" }
		],
		link: [
			{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
			{
				rel: "stylesheet",
				href: "//fonts.googleapis.com/css?family=Montserrat:400,700|Trade+Winds"
			},
			{ rel: "manifest", href: "manifest.json" },
			{ rel: "shortcut icon", type: "image/png", href: "/favicon.png" }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["./scss/bootstrap.scss"],
	styleResources: {
		scss: ["./scss/_global.scss"]
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		"@nuxtjs/eslint-module"
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxtjs/style-resources"],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
};
