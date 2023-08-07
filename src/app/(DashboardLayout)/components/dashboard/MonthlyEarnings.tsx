import { Avatar, Fab, Stack, Typography } from '@mui/material'
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons-react'

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard'
import dynamic from 'next/dynamic'
import { useTheme } from '@mui/material/styles'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

// eslint-disable-next-line max-lines-per-function
const MonthlyEarnings = () => {
	// Chart color
	const theme = useTheme()
	const secondary = theme.palette.secondary.main
	const secondarylight = '#f5fcff'
	const errorlight = '#fdede8'

	// Chart
	const optionscolumnchart: any = {
		chart: {
			fontFamily: "'Plus Jakarta Sans', sans-serif;",
			foreColor: '#adb0bb',
			group: 'sparklines',
			height: 60,
			sparkline: {
				enabled: true,
				toolbar: {
					show: false,
				},
				type: 'area',
			},
		},
		fill: {
			colors: [secondarylight],
			opacity: 0.05,
			type: 'solid',
		},
		markers: {
			size: 0,
		},
		stroke: {
			curve: 'smooth',
			width: 2,
		},
		tooltip: {
			theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
		},
	}
	const seriescolumnchart: any = [
		{
			color: secondary,
			// eslint-disable-next-line no-magic-numbers
			data: [25, 66, 20, 40, 12, 58, 20],
			name: '',
		},
	]

	return (
		<DashboardCard
			title="Monthly Earnings"
			action={
				<Fab color="secondary" size="medium" sx={{ color: '#ffffff' }}>
					<IconCurrencyDollar width={24} />
				</Fab>
			}
			footer={
				<Chart
					options={optionscolumnchart}
					series={seriescolumnchart}
					type="area"
					height="60px"
				/>
			}
		>
			<>
				<Typography variant="h3" fontWeight="700" mt="-20px">
					$6,820
				</Typography>
				<Stack direction="row" spacing={1} my={1} alignItems="center">
					<Avatar sx={{ bgcolor: errorlight, height: 27, width: 27 }}>
						<IconArrowDownRight width={20} color="#FA896B" />
					</Avatar>
					<Typography variant="subtitle2" fontWeight="600">
						+9%
					</Typography>
					<Typography variant="subtitle2" color="textSecondary">
						last year
					</Typography>
				</Stack>
			</>
		</DashboardCard>
	)
}

export default MonthlyEarnings
