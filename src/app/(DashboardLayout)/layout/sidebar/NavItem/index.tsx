// Mui imports
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	styled,
	useTheme,
} from '@mui/material'

import Link from 'next/link'
import React from 'react'

type NavGroup = {
	[x: string]: any
	id?: string
	navlabel?: boolean
	subheader?: string
	title?: string
	icon?: any
	href?: any
	onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>
}

interface ItemType {
	item: NavGroup
	// eslint-disable-next-line no-unused-vars
	onClick: (event: React.MouseEvent<HTMLElement>) => void
	hideMenu?: any
	level?: number | any
	pathDirect: string
}

const NavItem = ({ item, level, pathDirect, onClick }: ItemType) => {
	const Icon = item.icon
	const theme = useTheme()
	const itemIcon = <Icon stroke={1.5} size="1.3rem" />

	const ListItemStyled = styled(ListItem)(() => ({
		'.MuiButtonBase-root': {
			'&.Mui-selected': {
				'&:hover': {
					backgroundColor: theme.palette.primary.main,
					color: 'white',
				},
				backgroundColor: theme.palette.primary.main,
				color: 'white',
			},
			'&:hover': {
				backgroundColor: theme.palette.primary.light,
				color: theme.palette.primary.main,
			},
			backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
			borderRadius: '8px',
			color: theme.palette.text.secondary,
			marginBottom: '2px',
			padding: '8px 10px',
			paddingLeft: '10px',
			whiteSpace: 'nowrap',
		},
		padding: 0,
	}))

	return (
		<List component="div" disablePadding key={item.id}>
			<ListItemStyled>
				<ListItemButton
					component={Link}
					href={item.href}
					disabled={item.disabled}
					selected={pathDirect === item.href}
					target={item.external ? '_blank' : ''}
					onClick={onClick}
				>
					<ListItemIcon
						sx={{
							color: 'inherit',
							minWidth: '36px',
							p: '3px 0',
						}}
					>
						{itemIcon}
					</ListItemIcon>
					<ListItemText>
						<>{item.title}</>
					</ListItemText>
				</ListItemButton>
			</ListItemStyled>
		</List>
	)
}

export default NavItem
