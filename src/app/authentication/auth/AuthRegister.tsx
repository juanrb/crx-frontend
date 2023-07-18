import { Box, Button, Typography } from '@mui/material'

import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField'
import Link from 'next/link'
import React from 'react'
import { Stack } from '@mui/system'

interface registerType {
	title?: string
	subtitle?: React.JSX.Element | React.JSX.Element[]
	subtext?: React.JSX.Element | React.JSX.Element[]
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => (
	<>
		{title ? (
			<Typography fontWeight="700" variant="h2" mb={1}>
				{title}
			</Typography>
		) : null}

		{subtext}

		<Box>
			<Stack mb={3}>
				<Typography
					variant="subtitle1"
					fontWeight={600}
					component="label"
					htmlFor="name"
					mb="5px"
				>
					Name
				</Typography>
				<CustomTextField id="name" variant="outlined" fullWidth />

				<Typography
					variant="subtitle1"
					fontWeight={600}
					component="label"
					htmlFor="email"
					mb="5px"
					mt="25px"
				>
					Email Address
				</Typography>
				<CustomTextField id="email" variant="outlined" fullWidth />

				<Typography
					variant="subtitle1"
					fontWeight={600}
					component="label"
					htmlFor="password"
					mb="5px"
					mt="25px"
				>
					Password
				</Typography>
				<CustomTextField id="password" variant="outlined" fullWidth />
			</Stack>
			<Button
				color="primary"
				variant="contained"
				size="large"
				fullWidth
				component={Link}
				href="/authentication/login"
			>
				Sign Up
			</Button>
		</Box>
		{subtitle}
	</>
)

export default AuthRegister
