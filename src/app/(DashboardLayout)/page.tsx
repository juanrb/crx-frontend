'use client'

import { useTranslation } from 'react-i18next'
import { Box, Grid } from '@mui/material'

import PageContainer from '@/app/components/container/PageContainer'

import MonthlyEarnings from './home/components/MonthlyEarnings'
import ProductPerformances from './home/components/ProductPerformances'
import RecentTransactions from './home/components/RecentTransactions'
import WelcomeCard from './home/components/WelcomeCard'

const Dashboard = () => {
	const { t } = useTranslation()
	return (
		<PageContainer title={t('Home')} description={t('home.title')}>
			<Box>
				<Grid container spacing={3}>
					{/* column */}
					<Grid item xs={12}>
						<WelcomeCard />
					</Grid>
					{/* column */}
					{/* <Grid item xs={12} sm={6} lg={4}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<MonthlyEarnings isLoading={false} />
							</Grid>
						</Grid>
					</Grid> */}
					{/* column */}

					<Grid item xs={12} lg={4}>
						<RecentTransactions />
					</Grid>
					{/* column */}

					<Grid item xs={12} lg={8}>
						<ProductPerformances />
					</Grid>
				</Grid>
			</Box>
		</PageContainer>
	)
}

export default Dashboard
