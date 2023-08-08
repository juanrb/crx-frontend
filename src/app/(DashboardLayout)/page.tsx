'use client'

import { useTranslation } from 'react-i18next'
import { Box, Grid } from '@mui/material'

import PageContainer from '@/app/components/container/PageContainer'

const Dashboard = () => {
	const { t } = useTranslation()
	return (
		<PageContainer title={t('Home')} description={t('home.title')}>
			<Box>
				<Grid container spacing={3}></Grid>
			</Box>
		</PageContainer>
	)
}

export default Dashboard
