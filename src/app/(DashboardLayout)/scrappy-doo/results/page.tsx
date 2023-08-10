'use client'

import { useTranslation } from 'react-i18next'
import { Grid } from '@mui/material'

import PageContainer from '@/app/components/container/PageContainer'
import ComplexCard from '@/app/components/widgets/cards/ComplexCard'
import TopCards from '@/app/components/widgets/cards/TopCards'
import Breadcrumb from '@/app/layout/shared/breadcrumb/Breadcrumb'

const BCrumb = [
	{
		to: '/',
		title: 'Home',
	},
	{
		to: '/scrappy-doo',
		title: 'ScrappyDoo',
	},
	{
		title: 'Results',
	},
]

const WidgetCards = () => {
	const { t } = useTranslation()
	return (
		<PageContainer title={t('Results')} description="this is Results">
			{/* breadcrumb */}
			<Breadcrumb title={t('Results')} items={BCrumb} />
			{/* end breadcrumb */}
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<TopCards />
				</Grid>
				<Grid item xs={12}>
					<ComplexCard />
				</Grid>
			</Grid>
		</PageContainer>
	)
}

export default WidgetCards
