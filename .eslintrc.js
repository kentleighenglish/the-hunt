module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: "@babel/eslint-parser",
		requireConfigFile: false
	},
	extends: [
		"@nuxtjs",
		"plugin:prettier/recommended",
		"plugin:nuxt/recommended",
		"prettier"
	],
	plugins: ["eslint-plugin-prettier"],
	// add your custom rules here
	rules: {
		semi: "off",
		"no-tabs": "off",
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		"import/namespace": ["error", { allowComputed: true }],
		"vue/no-v-html": "off",
		"prettier/prettier": [
			"error",
			{
				singleQuote: false,
				semi: true,
				tabs: true,
				tabWidth: 2,
				trailingComma: "none"
			}
		],
		"vue/html-indent": ["error", "tab"]
	}
};
