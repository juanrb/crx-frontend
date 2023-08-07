import { uniqueId } from 'lodash'

interface MenuitemsType {
	[x: string]: any
	id?: string
	navlabel?: boolean
	subheader?: string
	title?: string
	icon?: any
	href?: string
	children?: MenuitemsType[]
	chip?: string
	chipColor?: string
	variant?: string
	external?: boolean
}
import { IconHome, IconSettings, IconUsers } from '@tabler/icons-react'

const Menuitems: MenuitemsType[] = [
	{
		navlabel: true,
		subheader: 'Dashboard',
	},

	{
		id: uniqueId(),
		title: 'Home',
		icon: IconHome,
		href: '/',
	},
	{
		id: uniqueId(),
		title: 'Users',
		icon: IconUsers,
		href: '/users',
	},
	{
		navlabel: true,
		subheader: 'Settings',
	},
	{
		id: uniqueId(),
		title: 'Settings',
		icon: IconSettings,
		href: '/settings',
	},
]

export default Menuitems
