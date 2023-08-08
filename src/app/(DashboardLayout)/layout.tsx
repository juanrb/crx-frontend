'use client'
import React, { useState } from 'react'
import { Box, Container, styled, useTheme } from '@mui/material'

import { useSelector } from '@/store/hooks'
import { AppState } from '@/store/store'
import Providers from '@/utils/api/provider'

import Header from '../layout/header/Header'
import Customizer from '../layout/shared/customizer/Customizer'
import Sidebar from '../layout/sidebar/Sidebar'

// import HorizontalHeader from './layout/horizontal/header/Header'
// import Navigation from './layout/horizontal/navbar/Navigation'

const MainWrapper = styled('div')(() => ({
	display: 'flex',
	minHeight: '100vh',
	width: '100%',
}))

const PageWrapper = styled('div')(() => ({
	display: 'flex',
	flexGrow: 1,
	paddingBottom: '60px',
	flexDirection: 'column',
	zIndex: 1,
	backgroundColor: 'transparent',
}))

interface Props {
	children: React.ReactNode
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [isSidebarOpen, setSidebarOpen] = useState(true)
	const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false)
	const customizer = useSelector((state: AppState) => state.customizer)
	const theme = useTheme()

	return (
		<Providers>
			<MainWrapper>
				{/* ------------------------------------------- */}
				{/* Sidebar */}
				{/* ------------------------------------------- */}
				<Sidebar />
				{/* ------------------------------------------- */}
				{/* Main Wrapper */}
				{/* ------------------------------------------- */}
				<PageWrapper
					className="page-wrapper"
					sx={{
						...(customizer.isCollapse && {
							[theme.breakpoints.up('lg')]: {
								ml: `${customizer.MiniSidebarWidth}px`,
							},
						}),
					}}
				>
					{/* ------------------------------------------- */}
					{/* Header */}
					{/* ------------------------------------------- */}
					{/* {customizer.isHorizontal ? <HorizontalHeader /> : <Header />} */}
					<Header enableNavigation={false} />
					{/* PageContent */}
					{/* {customizer.isHorizontal ? <Navigation /> : ''} */}
					<Container
						sx={{
							maxWidth:
								customizer.isLayout === 'boxed' ? 'lg' : '100%!important',
						}}
					>
						{/* ------------------------------------------- */}
						{/* PageContent */}
						{/* ------------------------------------------- */}

						<Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
							{/* <Outlet /> */}
							{children}
							{/* <Index /> */}
						</Box>

						{/* ------------------------------------------- */}
						{/* End Page */}
						{/* ------------------------------------------- */}
					</Container>
					{/* <Customizer /> */}
				</PageWrapper>
			</MainWrapper>
		</Providers>
	)
}
