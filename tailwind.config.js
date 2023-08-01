/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				main: ["var(--font-main)", "sans-serif"],
				title: ["var(--font-title)", "sans-serif"],
			},
			screens: {
				360: "360px",
				425: "425px",
				1900: "1900px",
				fhd: "1921px",
				"4k": "2561px",
			},
			colors: {
				white: {
					DEFAULT: "#F8FAFA",
				},
				green: "#36827F",
				black: "#001D3D ",
				yellow: {
					DEFAULT: "#FFD60A",
				},
			},
		},
	},
	plugins: [],
};
