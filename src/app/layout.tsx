'use client'

import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { baselightTheme } from '@/utils/theme/DefaultColors'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider theme={baselightTheme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
