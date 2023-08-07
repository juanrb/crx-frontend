import { Box, Drawer, useMediaQuery } from '@mui/material'

import Logo from '../shared/logo/Logo'
import React from 'react'
import SidebarItems from './SidebarItems'
import { Upgrade } from './Updrade'

interface ItemType {
	isMobileSidebarOpen: boolean
	// eslint-disable-next-line no-unused-vars
	onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void
	isSidebarOpen: boolean
}

const SHADOW = 5

const Sidebar = ({
	isMobileSidebarOpen,
	onSidebarClose,
	isSidebarOpen,
}: ItemType) => {
	const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'))

	const sidebarWidth = '270px'

	if (lgUp) {
		return (
			<Box
				sx={{
					flexShrink: 0,
					width: sidebarWidth,
				}}
			>
				{/* Sidebar for desktop */}
				<Drawer
					anchor="left"
					open={isSidebarOpen}
					variant="permanent"
					PaperProps={{
						sx: {
							boxSizing: 'border-box',
							width: sidebarWidth,
						},
					}}
				>
					{/* Sidebar Box */}
					<Box
						sx={{
							height: '100%',
						}}
					>
						{/* Logo */}
						<Box px={3}>
							<Logo />
						</Box>
						<Box>
							{/* Sidebar Items */}
							<SidebarItems />
							{/* <Upgrade /> */}
						</Box>
					</Box>
				</Drawer>
			</Box>
		)
	}

	return (
		<Drawer
			anchor="left"
			open={isMobileSidebarOpen}
			onClose={onSidebarClose}
			variant="temporary"
			PaperProps={{
				sx: {
					boxShadow: (theme) => theme.shadows[SHADOW],
					width: sidebarWidth,
				},
			}}
		>
			{/* Logo */}
			<Box px={2}>
				<Logo />
			</Box>
			{/* Sidebar For Mobile */}
			<SidebarItems />
			<Upgrade />
		</Drawer>
	)
}

export default Sidebar
