'use client'
import React from 'react'
import { Provider } from 'react-redux'
import Box from '@mui/material/Box'
// import NextNProgress from "nextjs-progressbar";
import CircularProgress from '@mui/material/CircularProgress'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import NextTopLoader from 'nextjs-toploader'

// import RTL from '@/app/(DashboardLayout)/layout/shared/customizer/RTL'
import { useSelector } from '@/store/hooks'
import { store } from '@/store/store'
import { AppState } from '@/store/store'
import { NextAppDirEmotionCacheProvider } from '@/utils/theme/EmotionCache'
import { ThemeSettings } from '@/utils/theme/Theme'

// import '@/app/api/index'
import '@/utils/i18n'

// import 'react-quill/dist/quill.snow.css'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

export const MyApp = ({ children }: { children: React.ReactNode }) => {
	const theme = ThemeSettings()

	const customizer = useSelector((state: AppState) => state.customizer)

	return (
		<>
			<NextTopLoader color="#5D87FF" />
			<NextAppDirEmotionCacheProvider options={{ key: 'modernize' }}>
				<ThemeProvider theme={theme}>
					{/* <RTL direction={customizer.activeDir}> */}
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					{children}
					{/* </RTL> */}
				</ThemeProvider>
			</NextAppDirEmotionCacheProvider>
		</>
	)
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [loading, setLoading] = React.useState(false)
	React.useEffect(() => {
		setTimeout(() => setLoading(true), 3000)
	}, [])
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Provider store={store}>
					{loading ? (
						// eslint-disable-next-line react/no-children-prop
						<MyApp children={children} />
					) : (
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%',
								height: '100vh',
							}}
						>
							<CircularProgress />
						</Box>
					)}
				</Provider>
			</body>
		</html>
	)
}
