/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'blue': '#262533',
				'primary-black': '#00D9B6',
				'white': '#FAFAFA',
				'danger': '#FF6275',
				'primary': '#784066',
				'gray': '#888888',
				'light-gray': '#F3F4F6',
				'yellow': '#FFB600',
				'light-blue': '#00AEFC',
				'cyan': '#00D9B6',
				'headerColor':'#79539f',
				'footer':'#252733',
				'footerOrignal':'#1a1c24',
			}
		}
	},
	plugins: []
}


