import { Box, Button, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import YupPassword from 'yup-password'

import { User } from '@/api/api-client'
import { useCreateMutation } from '@/api/api-client/CognitoControllerQuery'
import { registerType } from '@/app/auth/types'
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField'

import AuthSocialButtons from './AuthSocialButtons'

YupPassword(yup)
const validationSchema = yup.object({
	name: yup.string().required('Name is required'),
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup.string().password().required('Password is required'),
})

// eslint-disable-next-line max-lines-per-function
const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
	const router = useRouter()
	const createUserQuery = useCreateMutation()
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(values)
			createUserQuery
				.mutateAsync(new User({ ...values }))
				.then((res) => router.push('/auth/onboarding'))
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
					<Box>
						<CustomFormLabel htmlFor="name">Full Name</CustomFormLabel>
						<CustomTextField
							id="name"
							variant="outlined"
							fullWidth
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name}
							error={formik.touched.name && Boolean(formik.errors.name)}
							helperText={formik.touched.name && formik.errors.name}
						/>
					</Box>
					<Box>
						<CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
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
							variant="outlined"
							fullWidth
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
						/>
					</Box>
				</Stack>
				<Button
					color="primary"
					variant="contained"
					size="large"
					fullWidth
					type="submit"
					// component={Link}
					// href="/auth/auth1/login"
				>
					Sign Up
				</Button>
			</Box>
			{subtitle}
		</form>
	)
}

export default AuthRegister
