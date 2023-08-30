import {
	Box,
	Button,
	Divider,
	FormControlLabel,
	FormGroup,
	Stack,
	Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'

import { User } from '@/api/api-client'
import { useAuthMutation } from '@/api/api-client/CognitoControllerQuery'
import { loginType } from '@/app/auth/types'
import CustomCheckbox from '@/app/components/forms/theme-elements/CustomCheckbox'
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField'

import AuthSocialButtons from './AuthSocialButtons'

const validationSchema = yup.object({
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string()
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
})

// eslint-disable-next-line max-lines-per-function
const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
	const router = useRouter()
	const loginQuery = useAuthMutation()
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(values)
			loginQuery
				.mutateAsync(new User({ ...values }))
				.then((res) => router.push('/'))
				.catch((err) => console.log('error', err))
		},
	})

	return (
		<form onSubmit={formik.handleSubmit}>
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
					<CustomFormLabel htmlFor="email">Email</CustomFormLabel>
					<CustomTextField
						id="email"
						variant="outlined"
						fullWidth
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
				</Box>
				<Box>
					<CustomFormLabel htmlFor="password">Password</CustomFormLabel>
					<CustomTextField
						id="password"
						type="password"
						variant="outlined"
						fullWidth
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
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
				>
					Sign In
				</Button>
			</Box>
			{subtitle}
		</form>
	)
}

export default AuthLogin
