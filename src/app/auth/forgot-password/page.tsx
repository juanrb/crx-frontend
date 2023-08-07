'use client'
import { Box, Card, Grid, Typography } from '@mui/material'

import PageContainer from '@/app/components/container/PageContainer'
import Logo from '@/app/layout/shared/logo/Logo'

import AuthForgotPassword from '../authForms/AuthForgotPassword'

export default function ForgotPassword2() {
	return (
		<PageContainer
			title="Forgot Password Page"
			description="this is Sample page"
		>
			<Box
				sx={{
					position: 'relative',
					'&:before': {
						content: '""',
						background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
						backgroundSize: '400% 400%',
						animation: 'gradient 15s ease infinite',
						position: 'absolute',
						height: '100%',
						width: '100%',
						opacity: '0.3',
					},
				}}
			>
				<Grid
					container
					spacing={0}
					justifyContent="center"
					sx={{ height: '100vh' }}
				>
					<Grid
						item
						xs={12}
						sm={12}
						lg={4}
						xl={3}
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Card
							elevation={9}
							sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}
						>
							<Box display="flex" alignItems="center" justifyContent="center">
								<Logo />
							</Box>
							<Typography
								color="textSecondary"
								textAlign="center"
								variant="subtitle2"
								fontWeight="400"
							>
								Please enter the email address associated with your account and
								We will email you a link to reset your password.
							</Typography>
							<AuthForgotPassword />
						</Card>
					</Grid>
				</Grid>
			</Box>
		</PageContainer>
	)
}

ForgotPassword2.layout = 'Blank'
