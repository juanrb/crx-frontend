import { Box, Button, Stack } from '@mui/material'
import { useFormik } from 'formik'
import Link from 'next/link'
import * as yup from 'yup'

import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField'

const validationSchema = yup.object({
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
})

export default function AuthForgotPassword() {
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(values)
		},
	})

	return (
		<>
			<Stack mt={4} spacing={2}>
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

				<Button
					color="primary"
					variant="contained"
					type="submit"
					size="large"
					fullWidth
					disabled={!formik.isValid}
				>
					Forgot Password
				</Button>
				<Button
					color="primary"
					size="large"
					fullWidth
					component={Link}
					href="/auth/login"
				>
					Back to Login
				</Button>
			</Stack>
		</>
	)
}
