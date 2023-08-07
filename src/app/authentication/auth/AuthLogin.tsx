import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Stack,
	Typography,
} from '@mui/material'

import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField'
import Link from 'next/link'
import React from 'react'

interface loginType {
	title?: string
	subtitle?: React.JSX.Element | React.JSX.Element[]
	subtext?: React.JSX.Element | React.JSX.Element[]
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => (
	<>
		{title ? (
			<Typography fontWeight="700" variant="h2" mb={1}>
				{title}
			</Typography>
		) : null}

		{subtext}

		<Stack>
			<Box>
				<Typography
					variant="subtitle1"
					fontWeight={600}
					component="label"
					htmlFor="username"
					mb="5px"
				>
					Username
				</Typography>
				<CustomTextField variant="outlined" fullWidth />
			</Box>
			<Box mt="25px">
				<Typography
					variant="subtitle1"
					fontWeight={600}
					component="label"
					htmlFor="password"
					mb="5px"
				>
					Password
				</Typography>
				<CustomTextField type="password" variant="outlined" fullWidth />
			</Box>
			<Stack
				justifyContent="space-between"
				direction="row"
				alignItems="center"
				my={2}
			>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label="Remeber this Device"
					/>
				</FormGroup>
				<Typography
					component={Link}
					href="/"
					fontWeight="500"
					sx={{
						color: 'primary.main',
						textDecoration: 'none',
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
				component={Link}
				href="/"
				type="submit"
			>
				Sign In
			</Button>
		</Box>
		{subtitle}
	</>
)

export default AuthLogin
