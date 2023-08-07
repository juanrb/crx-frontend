/* eslint-disable no-magic-numbers */
'use client'

import { Box, Grid, Paper } from '@mui/material'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles'

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard'
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer'

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body1,
	color: theme.palette.text.secondary,
	height: 60,
	lineHeight: '60px',
	textAlign: 'center',
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } })
const lightTheme = createTheme({ palette: { mode: 'light' } })

const Shadow = () => (
	<PageContainer title="Shadow" description="this is Shadow">
		<DashboardCard title="Shadow">
			<Grid container spacing={2}>
				{[lightTheme, darkTheme].map((theme, index) => (
					<Grid item xs={6} key={index}>
						<ThemeProvider theme={theme}>
							<Box
								sx={{
									bgcolor: 'background.default',
									display: 'grid',
									gap: 2,
									gridTemplateColumns: {
										md: '1fr 1fr',
									},
									p: 2,
								}}
							>
								{[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
									<Item key={elevation} elevation={elevation}>
										{`elevation=${elevation}`}
									</Item>
								))}
							</Box>
						</ThemeProvider>
					</Grid>
				))}
			</Grid>
		</DashboardCard>
	</PageContainer>
)

export default Shadow
