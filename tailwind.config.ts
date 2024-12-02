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
			screens: {
				tablet: '838px',
				mobile: '376px'
			},
			fontFamily: {
				kyiv_sans: ["var(--font-kyiv-type-sans)"],
				kyiv_titling: ["var(--font-kyiv-type-titling)"],
				sawarabi: ["var(--font-sawarabi)"]
			},
			colors: {
				'regal-black': '#000000',
				'regal-white': '#FFFFFF',
				'regal-blue': '#CFE6F6',
				'regal-blue-opacity': '#CFE6F68C',
				'regal-blue-second': '#157FCA',
				'regal-dark-blue': '#235274',
				'regal-dark-blue-second': '#1A6599',
				'regal-light-blue': '#E5F1FA',
				'regal-light-blue-second': '#46A4E8',
				'regal-light-blue-third': '#93D1FEA8',
				'regal-gray': '#F3F7FB',
				'regal-light-gray': '#00000040'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			boxShadow: {
				'accordion': '0 0 1rem #0B7DD0, inset 0 0 2rem #0B7DD0'
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;
