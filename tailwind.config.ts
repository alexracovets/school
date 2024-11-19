import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			'tablet': '1030px',
			'mobile': '540px',
		},
		extend: {
			fontFamily: {
				'oswald': ["var(--font-oswald)"],
				'imb': ["var(--font-imb)"]
			},
			colors: {
				'regal-dark-blue': '#235274',
				'regal-teal-blue': '#2480C3',
				'regal-light-blue': '#93D1FE',
				'regal-sky-blue': '#0094FFA1',
				'regal-lavender': '#0094FFA1',
				'regal-light-teal': '#BAEDF4',
				'regal-pastel-blue': '#E5F1FA',
				'regal-pale-blue': '#CFE6F6',
				'regal-light-lavender': '#F9FAFF',
				'regal-red': '#FF0000',
				'regal-green': '#24FF00',
				'regal-blue': '#00A3FF',
				'regal-yellow': '#FFE500',
				'regal-gray': '#D9D9D9',
				'opacity-black': '#000000',
				'opacity-#FFFFFF': '#FFFFFF'
			}
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;
