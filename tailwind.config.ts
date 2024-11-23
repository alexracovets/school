import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,scss}",
		"./app/**/*.{js,ts,jsx,tsx,scss}",
		"./shared/components/**/*.{js,ts,jsx,tsx,scss}",
	],
	theme: {
		extend: {
			fontFamily: {
				kyiv_sans: ["var(--font-kyiv-type-sans)"],
				kyiv_titling: ["var(--font-kyiv-type-titling)"]
			},
			colors: {
				'regal-blue': '#CFE6F6',
			},
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;
