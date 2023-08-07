'use client'

import { Box, Grid } from '@mui/material'

import PageContainer from '@/app/components/container/PageContainer'

const Dashboard = () => (
	<PageContainer title="Dashboard" description="dashboard homepage">
		<Box>
			<Grid container spacing={3}></Grid>
		</Box>
	</PageContainer>
)

export default Dashboard
