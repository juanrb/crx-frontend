'use client'

import { Box, Container, styled } from '@mui/material'
import React, { useState } from 'react'

import Header from '@/app/(DashboardLayout)/layout/header/Header'
import Providers from '@/utils/api/provider'
import Sidebar from '@/app/(DashboardLayout)/layout/sidebar/Sidebar'

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
	return (
		<Providers>
			<MainWrapper className="mainwrapper">
				{/* ------------------------------------------- */}
				{/* Sidebar */}
				{/* ------------------------------------------- */}
				<Sidebar
					isSidebarOpen={isSidebarOpen}
					isMobileSidebarOpen={isMobileSidebarOpen}
					onSidebarClose={() => setMobileSidebarOpen(false)}
				/>
				{/* ------------------------------------------- */}
				{/* Main Wrapper */}
				{/* ------------------------------------------- */}
				<PageWrapper className="page-wrapper">
					{/* ------------------------------------------- */}
					{/* Header */}
					{/* ------------------------------------------- */}
					<Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
					{/* ------------------------------------------- */}
					{/* PageContent */}
					{/* ------------------------------------------- */}
					<Container
						sx={{
							paddingTop: '20px',
							maxWidth: '1200px',
						}}
					>
						{/* ------------------------------------------- */}
						{/* Page Route */}
						{/* ------------------------------------------- */}
						<Box sx={{ minHeight: 'calc(100vh - 170px)' }}>{children}</Box>
						{/* ------------------------------------------- */}
						{/* End Page */}
						{/* ------------------------------------------- */}
					</Container>
				</PageWrapper>
			</MainWrapper>
		</Providers>
	)
}
