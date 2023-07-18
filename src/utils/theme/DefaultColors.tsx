// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

// eslint-disable-next-line new-cap
export const plus = Plus_Jakarta_Sans({
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const baselightTheme = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: '7px',
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				'.MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation': {
					boxShadow:
						'rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important',
				},
			},
		},
	},
	direction: 'ltr',
	palette: {
		action: {
			disabledBackground: 'rgba(73,82,88,0.12)',
			hover: '#f6f9fc',
			hoverOpacity: 0.02,
		},
		divider: '#e5eaef',
		error: {
			contrastText: '#ffffff',
			dark: '#f3704d',
			light: '#FDEDE8',
			main: '#FA896B',
		},
		grey: {
			100: '#F2F6FA',
			200: '#EAEFF4',
			300: '#DFE5EF',
			400: '#7C8FAC',
			500: '#5A6A85',
			600: '#2A3547',
		},
		info: {
			contrastText: '#ffffff',
			dark: '#1682d4',
			light: '#EBF3FE',
			main: '#539BFF',
		},
		primary: {
			dark: '#4570EA',
			light: '#ECF2FF',
			main: '#5D87FF',
		},
		secondary: {
			dark: '#23afdb',
			light: '#E8F7FF',
			main: '#49BEFF',
		},
		success: {
			contrastText: '#ffffff',
			dark: '#02b3a9',
			light: '#E6FFFA',
			main: '#13DEB9',
		},
		text: {
			primary: '#2A3547',
			secondary: '#5A6A85',
		},
		warning: {
			contrastText: '#ffffff',
			dark: '#ae8e59',
			light: '#FEF5E5',
			main: '#FFAE1F',
		},
	},
	typography: {
		body1: {
			fontSize: '0.875rem',
			fontWeight: 400,
			lineHeight: '1.334rem',
		},
		body2: {
			fontSize: '0.75rem',
			fontWeight: 400,
			letterSpacing: '0rem',
			lineHeight: '1rem',
		},
		button: {
			fontWeight: 400,
			textTransform: 'capitalize',
		},
		fontFamily: plus.style.fontFamily,
		h1: {
			fontFamily: plus.style.fontFamily,
			fontSize: '2.25rem',
			fontWeight: 600,
			lineHeight: '2.75rem',
		},
		h2: {
			fontFamily: plus.style.fontFamily,
			fontSize: '1.875rem',
			fontWeight: 600,
			lineHeight: '2.25rem',
		},
		h3: {
			fontFamily: plus.style.fontFamily,
			fontSize: '1.5rem',
			fontWeight: 600,
			lineHeight: '1.75rem',
		},
		h4: {
			fontSize: '1.3125rem',
			fontWeight: 600,
			lineHeight: '1.6rem',
		},
		h5: {
			fontSize: '1.125rem',
			fontWeight: 600,
			lineHeight: '1.6rem',
		},
		h6: {
			fontSize: '1rem',
			fontWeight: 600,
			lineHeight: '1.2rem',
		},
		subtitle1: {
			fontSize: '0.875rem',
			fontWeight: 400,
		},
		subtitle2: {
			fontSize: '0.875rem',
			fontWeight: 400,
		},
	},
})

export { baselightTheme }
