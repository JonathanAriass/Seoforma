/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			fontWeight: {
				'extralight': 200,
				'light': 300,
				'normal': 400,
				'medium': 500,
				'semibold': 600,
			},
			letterSpacing: {
				'wider': '0.1em',
				'widest': '0.2em',
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
