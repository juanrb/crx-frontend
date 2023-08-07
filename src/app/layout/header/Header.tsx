import {
	AppBar,
	Box,
	IconButton,
	Stack,
	styled,
	Toolbar,
	useMediaQuery,
} from '@mui/material'
import { IconMenu2 } from '@tabler/icons-react'

import {
	toggleMobileSidebar,
	toggleSidebar,
} from '@/store/customizer/CustomizerSlice'
import { useDispatch, useSelector } from '@/store/hooks'
import { AppState } from '@/store/store'

import Cart from './Cart'
import Language from './Language'
import MobileRightSidebar from './MobileRightSidebar'
import Navigation from './Navigation'
import Notifications from './Notification'
import Profile from './Profile'
import Search from './Search'

const Header = () => {
	const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'))
	const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down('lg'))

	// drawer
	const customizer = useSelector((state: AppState) => state.customizer)
	const dispatch = useDispatch()

	const AppBarStyled = styled(AppBar)(({ theme }) => ({
		boxShadow: 'none',
		background: theme.palette.background.paper,
		justifyContent: 'center',
		backdropFilter: 'blur(4px)',
		[theme.breakpoints.up('lg')]: {
			minHeight: customizer.TopbarHeight,
		},
	}))
	const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
		width: '100%',
		color: theme.palette.text.secondary,
	}))

	return (
		<AppBarStyled position="sticky" color="default">
			<ToolbarStyled>
				{/* ------------------------------------------- */}
				{/* Toggle Button Sidebar */}
				{/* ------------------------------------------- */}
				<IconButton
					color="inherit"
					aria-label="menu"
					onClick={
						lgUp
							? () => dispatch(toggleSidebar())
							: () => dispatch(toggleMobileSidebar())
					}
				>
					<IconMenu2 size="20" />
				</IconButton>

				{/* ------------------------------------------- */}
				{/* Search Dropdown */}
				{/* ------------------------------------------- */}
				<Search />
				{lgUp ? (
					<>
						<Navigation />
					</>
				) : null}

				<Box flexGrow={1} />
				<Stack spacing={1} direction="row" alignItems="center">
					<Language />
					{/* ------------------------------------------- */}
					{/* Ecommerce Dropdown */}
					{/* ------------------------------------------- */}
					{/* <Cart /> */}
					{/* ------------------------------------------- */}
					{/* End Ecommerce Dropdown */}
					{/* ------------------------------------------- */}
					<Notifications />
					{/* ------------------------------------------- */}
					{/* Toggle Right Sidebar for mobile */}
					{/* ------------------------------------------- */}
					{lgDown ? <MobileRightSidebar /> : null}
					<Profile />
				</Stack>
			</ToolbarStyled>
		</AppBarStyled>
	)
}

export default Header
