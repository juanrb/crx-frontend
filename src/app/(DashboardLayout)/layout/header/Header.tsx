import {
	AppBar,
	Badge,
	Box,
	IconButton,
	Stack,
	Toolbar,
	styled,
} from '@mui/material'
import { IconBellRinging, IconMenu } from '@tabler/icons-react'

// Components
import Profile from './Profile'
import PropTypes from 'prop-types'
import React from 'react'

interface ItemType {
	// eslint-disable-next-line no-unused-vars
	toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
	/*
	 * Const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
	 * const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
	 */

	const AppBarStyled = styled(AppBar)(({ theme }) => ({
		[theme.breakpoints.up('lg')]: {
			minHeight: '70px',
		},
		backdropFilter: 'blur(4px)',
		background: theme.palette.background.paper,
		boxShadow: 'none',
		justifyContent: 'center',
	}))
	const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
		color: theme.palette.text.secondary,
		width: '100%',
	}))

	return (
		<AppBarStyled position="sticky" color="default">
			<ToolbarStyled>
				<IconButton
					color="inherit"
					aria-label="menu"
					onClick={toggleMobileSidebar}
					sx={{
						display: {
							lg: 'none',
							xs: 'inline',
						},
					}}
				>
					<IconMenu width="20" height="20" />
				</IconButton>

				<IconButton
					size="large"
					aria-label="show 11 new notifications"
					color="inherit"
					aria-controls="msgs-menu"
					aria-haspopup="true"
				>
					<Badge variant="dot" color="primary">
						<IconBellRinging size="21" stroke="1.5" />
					</Badge>
				</IconButton>
				<Box flexGrow={1} />
				<Stack spacing={1} direction="row" alignItems="center">
					{/* <Button variant="contained" disableElevation color="primary"  target="_blank" href="https://adminmart.com/product/modernize-next-js-admin-dashboard">
            Upgrade to Pro
          </Button> */}
					<Profile />
				</Stack>
			</ToolbarStyled>
		</AppBarStyled>
	)
}

Header.propTypes = {
	sx: PropTypes.object,
}

export default Header
