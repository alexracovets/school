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
				kyiv_titling: ["var(--font-kyiv-type-titling)"],
				sawarabi: ["var(--font-sawarabi)"]
			},
			colors: {
				'regal-black': '#000000',
				'regal-white': '#FFFFFF',
				'regal-blue': '#CFE6F6',
				'regal-dark-blue': "#235274",
				'regal-dark-blue-second': "#1A6599",
				'regal-light-blue': '#E5F1FA',
				'regal-light-blue-second': '#46A4E8',
				'regal-light-blue-third': '#93D1FEA8',
				'regal-gray': '#F3F7FB',
				'regal-light-gray': "#00000040"
			},
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;
