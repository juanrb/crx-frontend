import { useCallback, useState } from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'

import { User } from '@/api/api-client'
import { useCreateMutation } from '@/api/api-client/CognitoControllerQuery'
import { registerType } from '@/app/auth/types'
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField'

import AuthSocialButtons from './AuthSocialButtons'

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
	const createUserQuery = useCreateMutation()
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const handleRegister = useCallback(() => {
		createUserQuery
			.mutateAsync(
				new User({
					email: username,
					password,
				})
			)
			.then((res) => console.log('response', res))
			.catch((err) => console.log('error', err))
	}, [createUserQuery, password, username])

	return (
		<>
			{title ? (
				<Typography fontWeight="700" variant="h3" mb={1}>
					{title}
				</Typography>
			) : null}

			{/* {subtext}
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
			</Box> */}

			<Box>
				<Stack mb={3}>
					<CustomFormLabel htmlFor="name">Full Name</CustomFormLabel>
					<CustomTextField id="name" variant="outlined" fullWidth />
					<CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
					<CustomTextField
						id="email"
						variant="outlined"
						fullWidth
						onChange={(email: React.ChangeEvent<HTMLInputElement>) =>
							setUsername(email.target.value)
						}
					/>
					<CustomFormLabel htmlFor="password">Password</CustomFormLabel>
					<CustomTextField
						id="password"
						variant="outlined"
						fullWidth
						onChange={(password: React.ChangeEvent<HTMLInputElement>) =>
							setPassword(password.target.value)
						}
					/>
				</Stack>
				<Button
					color="primary"
					variant="contained"
					size="large"
					fullWidth
					// component={Link}
					// href="/auth/auth1/login"
					onClick={handleRegister}
				>
					Sign Up
				</Button>
			</Box>
			{subtitle}
		</>
	)
}

export default AuthRegister
