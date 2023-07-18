import {
	IconAperture,
	IconCopy,
	IconLayoutDashboard,
	IconLogin,
	IconMoodHappy,
	IconTypography,
	IconUserPlus,
} from '@tabler/icons-react'

import { uniqueId } from 'lodash'

const Menuitems = [
	{
		navlabel: true,
		subheader: 'Home',
	},

	{
		href: '/',
		icon: IconLayoutDashboard,
		id: uniqueId(),
		title: 'Dashboard',
	},
	{
		navlabel: true,
		subheader: 'Utilities',
	},
	{
		href: '/utilities/typography',
		icon: IconTypography,
		id: uniqueId(),
		title: 'Typography',
	},
	{
		href: '/utilities/shadow',
		icon: IconCopy,
		id: uniqueId(),
		title: 'Shadow',
	},
	{
		navlabel: true,
		subheader: 'Auth',
	},
	{
		href: '/authentication/login',
		icon: IconLogin,
		id: uniqueId(),
		title: 'Login',
	},
	{
		href: '/authentication/register',
		icon: IconUserPlus,
		id: uniqueId(),
		title: 'Register',
	},
	{
		navlabel: true,
		subheader: 'Extra',
	},
	{
		href: '/icons',
		icon: IconMoodHappy,
		id: uniqueId(),
		title: 'Icons',
	},
	{
		href: '/sample-page',
		icon: IconAperture,
		id: uniqueId(),
		title: 'Sample Page',
	},
]

export default Menuitems
