import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'mantis': {
					'50': '#f5fbf2',
					'100': '#e7f8e0',
					'200': '#d0efc3',
					'300': '#a9e095',
					'400': '#81cc66',
					'500': '#58ae39',
					'600': '#458f2a',
					'700': '#377124',
					'800': '#2f5a21',
					'900': '#274a1d',
					'950': '#11280b',
				},
				'lavender': {
					'50': '#fcf7fd',
					'100': '#f7edfa',
					'200': '#efdef6',
					'300': '#e3c5ed',
					'400': '#d29fe1',
					'500': '#bd75d1',
					'600': '#ac5cc1',
					'700': '#9449a7',
					'800': '#7c3f8a',
					'900': '#65346f',
					'950': '#471c4f',
				},
				'indigo': {
					'50': '#f7f6fc',
					'100': '#efeef9',
					'200': '#e2dff5',
					'300': '#cbc5ed',
					'400': '#b0a4e1',
					'500': '#9984d6',
					'600': '#8162c5',
					'700': '#714fb2',
					'800': '#5e4295',
					'900': '#4f377b',
					'950': '#322352',
				},
			},
		},
	},
	plugins: [
		plugin(function({ addVariant }) {
			addVariant('primary', "&:where(.primary *)"),
			addVariant('secondary', "&:where(.secondary *)"),
			addVariant('tertiary', "&:where(.tertiary *)")
		})
	],
	darkMode: "selector"
}
