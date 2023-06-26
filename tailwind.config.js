/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		screens: {
			phone: "285px",
			// => @media (min-width: 640px) { ... }
			tablet: "640px",
			// => @media (min-width: 640px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			colors: {
				navbarBg: "#454545",
				heroBg: "#BEC5AD",
				heroText: "#454545",
				activeText: "#ff9500",
				aboutBg: "#454545",
				techBg: "#BEC5AD",
				secondary: "#aaa6c3",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
				menuBg: "#004AAD",
			},
		},
	},
	plugins: [],
};
