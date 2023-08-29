import { useCallback, useState } from 'react'
import {
	Box,
	Button,
	Divider,
	FormControlLabel,
	FormGroup,
	Stack,
	Typography,
} from '@mui/material'
import Link from 'next/link'

import { User } from '@/api/api-client'
import { useAuthMutation } from '@/api/api-client/CognitoControllerQuery'
import { loginType } from '@/app/auth/types'
import CustomCheckbox from '@/app/components/forms/theme-elements/CustomCheckbox'
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField'

import AuthSocialButtons from './AuthSocialButtons'

// eslint-disable-next-line max-lines-per-function
const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
	const loginQuery = useAuthMutation()
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const handleLogin = useCallback(() => {
		loginQuery
			.mutateAsync(new User({ email: username, password }))
			.then((res) => console.log('response', res))
			.catch((err) => console.log('error', err))
	}, [loginQuery, password, username])
	return (
		<>
			{title ? (
				<Typography fontWeight="700" variant="h3" mb={1}>
					{title}
				</Typography>
			) : null}

			{/* {subtext}

			<AuthSocialButtons title="Sign in with" />
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
						or sign in with
					</Typography>
				</Divider>
			</Box> */}

			<Stack>
				<Box>
					<CustomFormLabel htmlFor="username">Username</CustomFormLabel>
					<CustomTextField
						id="username"
						variant="outlined"
						fullWidth
						onChange={(email: React.ChangeEvent<HTMLInputElement>) =>
							setUsername(email.target.value)
						}
					/>
				</Box>
				<Box>
					<CustomFormLabel htmlFor="password">Password</CustomFormLabel>
					<CustomTextField
						id="password"
						type="password"
						variant="outlined"
						fullWidth
						onChange={(password: React.ChangeEvent<HTMLInputElement>) =>
							setPassword(password.target.value)
						}
					/>
				</Box>
				<Stack
					justifyContent="space-between"
					direction="row"
					alignItems="center"
					my={2}
				>
					<FormGroup>
						{/* <FormControlLabel
							control={<CustomCheckbox defaultChecked />}
							label="Remeber this Device"
						/> */}
					</FormGroup>
					<Typography
						component={Link}
						href="/auth/forgot-password"
						fontWeight="500"
						sx={{
							textDecoration: 'none',
							color: 'primary.main',
						}}
					>
						Forgot Password ?
					</Typography>
				</Stack>
			</Stack>
			<Box>
				<Button
					color="primary"
					variant="contained"
					size="large"
					fullWidth
					// component={Link}
					// href="/"
					type="submit"
					onClick={handleLogin}
				>
					Sign In
				</Button>
			</Box>
			{subtitle}
		</>
	)
}

export default AuthLogin
