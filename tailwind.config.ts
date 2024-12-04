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
				tablet: '1030px',
				mobile: '769px'
			},
			fontFamily: {
				kyiv_titling: ["var(--font-kyiv-type-titling)"],
				sawarabi: ["var(--font-sawarabi)"]
			},
			colors: {
				'regal-black': '#000000',
				'regal-white': '#FFFFFF',
				'regal-blue': '#CFE6F6',
				'regal-blue-opacity': '#CFE6F68C',
				'regal-blue-opacity-second': '#32CADE82',
				'regal-blue-second': '#157FCA',
				'regal-dark-blue': '#235274',
				'regal-dark-blue-second': '#1A6599',
				'regal-light-blue': '#E5F1FA',
				'regal-light-blue-second': '#46A4E8',
				'regal-light-blue-third': '#93D1FEA8',
				'regal-light-blue-fourd': '#EDF8FF',
				'regal-radio': '#3A9EE4',
				'regal-gray': '#F3F7FB',
				'regal-light-gray': '#00000040',
				'regal-btn-hover': '#C1E5FD',
				'regal-btn-focus': '#9AD6FF',
				'regal-btn-active': '#3A9EE4',
				'regal-btn-disabled': '#D7E1E8',
				'regal-dot-blue': '#32CADE',
				'regal-dot-red': '#F01F45',
				'regal-pink': '#EBCFEA'
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
				'accordion': '0 0 1rem #0B7DD0, inset 0 0 2rem #0B7DD0',
				'accordion-tablet': '0 0 .5rem #0B7DD0, inset 0 0 1.5rem #0B7DD0'
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			transitionDuration: {
				'2000': '2000ms',
			}
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;
