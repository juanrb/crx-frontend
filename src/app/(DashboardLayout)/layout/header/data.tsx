import ddIcon1 from 'src/assets/images/svgs/icon-dd-chat.svg'
import ddIcon2 from 'src/assets/images/svgs/icon-dd-cart.svg'
import ddIcon3 from 'src/assets/images/svgs/icon-dd-invoice.svg'
import ddIcon4 from 'src/assets/images/svgs/icon-dd-date.svg'
import ddIcon5 from 'src/assets/images/svgs/icon-dd-mobile.svg'
import ddIcon6 from 'src/assets/images/svgs/icon-dd-lifebuoy.svg'
import ddIcon7 from 'src/assets/images/svgs/icon-dd-message-box.svg'
import ddIcon8 from 'src/assets/images/svgs/icon-dd-application.svg'
import icon1 from 'src/assets/images/svgs/icon-account.svg'
import icon2 from 'src/assets/images/svgs/icon-inbox.svg'
import icon3 from 'src/assets/images/svgs/icon-tasks.svg'
import img1 from 'src/assets/images/profile/user-1.jpg'
import img2 from 'src/assets/images/profile/user-2.jpg'
import img3 from 'src/assets/images/profile/user-3.jpg'
import img4 from 'src/assets/images/profile/user-4.jpg'

/*
 *
 * Notifications dropdown
 *
 */
const notifications = [
	{
		avatar: img1,
		subtitle: 'Congratulate him',
		title: 'Roman Joined the Team!',
	},
	{
		avatar: img2,
		subtitle: 'Salma sent you new message',
		title: 'New message received',
	},
	{
		avatar: img3,
		subtitle: 'Check your earnings',
		title: 'New Payment received',
	},
	{
		avatar: img4,
		subtitle: 'Assign her new tasks',
		title: 'Jolly completed tasks',
	},
	{
		avatar: img1,
		subtitle: 'Congratulate him',
		title: 'Roman Joined the Team!',
	},
	{
		avatar: img2,
		subtitle: 'Salma sent you new message',
		title: 'New message received',
	},
	{
		avatar: img3,
		subtitle: 'Check your earnings',
		title: 'New Payment received',
	},
	{
		avatar: img4,
		subtitle: 'Assign her new tasks',
		title: 'Jolly completed tasks',
	},
]

/*
 *
 * Profile dropdown
 *
 */
const profile = [
	{
		href: '/user-profile',
		icon: icon1,
		subtitle: 'Account Settings',
		title: 'My Profile',
	},
	{
		href: '/apps/email',
		icon: icon2,
		subtitle: 'Messages & Emails',
		title: 'My Inbox',
	},
	{
		href: '/apps/notes',
		icon: icon3,
		subtitle: 'To-do and Daily Tasks',
		title: 'My Tasks',
	},
]

// Apps dropdown

const appsLink = [
	{
		avatar: ddIcon1,
		href: '/apps/chats',
		subtext: 'Messages & Emails',
		title: 'Chat Application',
	},
	{
		avatar: ddIcon2,
		href: '/apps/ecommerce/shop',
		subtext: 'Messages & Emails',
		title: 'eCommerce App',
	},
	{
		avatar: ddIcon3,
		href: '/',
		subtext: 'Messages & Emails',
		title: 'Invoice App',
	},
	{
		avatar: ddIcon4,
		href: '/apps/calendar',
		subtext: 'Messages & Emails',
		title: 'Calendar App',
	},
	{
		avatar: ddIcon5,
		href: '/apps/contacts',
		subtext: 'Account settings',
		title: 'Contact Application',
	},
	{
		avatar: ddIcon6,
		href: '/apps/tickets',
		subtext: 'Account settings',
		title: 'Tickets App',
	},
	{
		avatar: ddIcon7,
		href: '/apps/email',
		subtext: 'To-do and Daily tasks',
		title: 'Email App',
	},
	{
		avatar: ddIcon8,
		href: '/',
		subtext: 'To-do and Daily tasks',
		title: 'Kanban Application',
	},
]

const pageLinks = [
	{
		href: '/pricing',
		title: 'Pricing Page',
	},
	{
		href: '/auth/login',
		title: 'Authentication Design',
	},
	{
		href: '/auth/register',
		title: 'Register Now',
	},
	{
		href: '/404',
		title: '404 Error Page',
	},
	{
		href: '/apps/notes',
		title: 'Notes App',
	},
	{
		href: '/user-profile',
		title: 'User Application',
	},
	{
		href: '/apps/blog/posts',
		title: 'Blog Design',
	},
	{
		href: '/apps/ecommerce/eco-checkout',
		title: 'Shopping Cart',
	},
]

export { notifications, profile, pageLinks, appsLink }
