'use client'

import * as React from 'react'
import { Box, CardContent, Divider, Grid, Tab, Tabs } from '@mui/material'
import {
	IconArticle,
	IconBell,
	IconLock,
	IconUserCircle,
} from '@tabler/icons-react'

import PageContainer from '@/app/components/container/PageContainer'
import BlankCard from '@/app/components/shared/BlankCard'
import Breadcrumb from '@/app/layout/shared/breadcrumb/Breadcrumb'

import AccountTab from './components/AccountTab'
import BillsTab from './components/BillsTab'
import NotificationTab from './components/NotificationTab'
import SecurityTab from './components/SecurityTab'

// components

const BCrumb = [
	{
		to: '/',
		title: 'Home',
	},
	{
		title: 'Settings',
	},
]

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box>{children}</Box>}
		</div>
	)
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const AccountSetting = () => {
	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<PageContainer title="Setting" description="this is Setting">
			{/* breadcrumb */}
			<Breadcrumb title="Settings" items={BCrumb} />
			{/* end breadcrumb */}

			<Grid container spacing={3}>
				<Grid item xs={12}>
					<BlankCard>
						<Box sx={{ maxWidth: { xs: 320, sm: 480 } }}>
							<Tabs
								value={value}
								onChange={handleChange}
								scrollButtons="auto"
								aria-label="basic tabs example"
							>
								<Tab
									iconPosition="start"
									icon={<IconUserCircle size="22" />}
									label="Account"
									{...a11yProps(0)}
								/>

								<Tab
									iconPosition="start"
									icon={<IconBell size="22" />}
									label="Notifications"
									{...a11yProps(1)}
								/>
								<Tab
									iconPosition="start"
									icon={<IconArticle size="22" />}
									label="Bills"
									{...a11yProps(2)}
								/>
								<Tab
									iconPosition="start"
									icon={<IconLock size="22" />}
									label="Security"
									{...a11yProps(3)}
								/>
							</Tabs>
						</Box>
						<Divider />
						<CardContent>
							<TabPanel value={value} index={0}>
								<AccountTab />
							</TabPanel>
							<TabPanel value={value} index={1}>
								<NotificationTab />
							</TabPanel>
							<TabPanel value={value} index={2}>
								<BillsTab />
							</TabPanel>
							<TabPanel value={value} index={3}>
								<SecurityTab />
							</TabPanel>
						</CardContent>
					</BlankCard>
				</Grid>
			</Grid>
		</PageContainer>
	)
}

export default AccountSetting
