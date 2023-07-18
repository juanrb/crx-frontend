'use client'

import { Box, Card, Grid, Stack, Typography } from '@mui/material'

import AuthRegister from '../auth/AuthRegister'
import Link from 'next/link'
import Logo from '@/app/(DashboardLayout)/layout/shared/logo/Logo'
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer'

// eslint-disable-next-line max-lines-per-function
const Register2 = () => (
	<PageContainer title="Register" description="this is Register page">
		<Box
			sx={{
				'&:before': {
					animation: 'gradient 15s ease infinite',
					background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
					backgroundSize: '400% 400%',
					content: '""',
					height: '100%',
					opacity: '0.3',
					position: 'absolute',
					width: '100%',
				},
				position: 'relative',
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
						sx={{
							maxWidth: '500px',
							p: 4,
							width: '100%',
							zIndex: 1,
						}}
					>
						<Box display="flex" alignItems="center" justifyContent="center">
							<Logo />
						</Box>
						<AuthRegister
							subtext={
								<Typography
									variant="subtitle1"
									textAlign="center"
									color="textSecondary"
									mb={1}
								>
									Your Social Campaigns
								</Typography>
							}
							subtitle={
								<Stack
									direction="row"
									justifyContent="center"
									spacing={1}
									mt={3}
								>
									<Typography
										color="textSecondary"
										variant="h6"
										fontWeight="400"
									>
										Already have an Account?
									</Typography>
									<Typography
										component={Link}
										href="/authentication/login"
										fontWeight="500"
										sx={{
											color: 'primary.main',
											textDecoration: 'none',
										}}
									>
										Sign In
									</Typography>
								</Stack>
							}
						/>
					</Card>
				</Grid>
			</Grid>
		</Box>
	</PageContainer>
)

export default Register2
