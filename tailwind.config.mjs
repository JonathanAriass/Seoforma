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
			colors: {
				'custom-dark-start': '#0f1819',
				'custom-dark-end': '#1c363f',
			},
			boxShadow: {
				'custom': '8px 16px 16px rgba(0, 0, 0, 0.25)',
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
