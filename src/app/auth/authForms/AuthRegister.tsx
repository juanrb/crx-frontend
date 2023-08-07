import { Box, Button, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Link from 'next/link'

import { registerType } from '@/app/auth/types'
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField'

import AuthSocialButtons from './AuthSocialButtons'

const AuthRegister = ({ title, subtitle, subtext }: registerType) => (
	<>
		{title ? (
			<Typography fontWeight="700" variant="h3" mb={1}>
				{title}
			</Typography>
		) : null}

		{subtext}
		<AuthSocialButtons title="Sign up with" />

		<Box mt={3}>
			<Divider>
				<Typography
					component="span"
					color="textSecondary"
					variant="h6"
					fontWeight="400"
					position="relative"
					px={2}
				>
					or sign up with
				</Typography>
			</Divider>
		</Box>

		<Box>
			<Stack mb={3}>
				<CustomFormLabel htmlFor="name">Name</CustomFormLabel>
				<CustomTextField id="name" variant="outlined" fullWidth />
				<CustomFormLabel htmlFor="email">Email Adddress</CustomFormLabel>
				<CustomTextField id="email" variant="outlined" fullWidth />
				<CustomFormLabel htmlFor="password">Password</CustomFormLabel>
				<CustomTextField id="password" variant="outlined" fullWidth />
			</Stack>
			<Button
				color="primary"
				variant="contained"
				size="large"
				fullWidth
				component={Link}
				href="/auth/auth1/login"
			>
				Sign Up
			</Button>
		</Box>
		{subtitle}
	</>
)

export default AuthRegister
