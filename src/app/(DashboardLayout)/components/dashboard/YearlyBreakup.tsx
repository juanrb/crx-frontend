import { Avatar, Grid, Stack, Typography } from '@mui/material'

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard'
import { IconArrowUpLeft } from '@tabler/icons-react'
import dynamic from 'next/dynamic'
import { useTheme } from '@mui/material/styles'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

// eslint-disable-next-line max-lines-per-function
const YearlyBreakup = () => {
	// Chart color
	const theme = useTheme()
	const primary = theme.palette.primary.main
	const primarylight = '#ecf2ff'
	const successlight = theme.palette.success.light

	// Chart
	const optionscolumnchart: any = {
		chart: {
			fontFamily: "'Plus Jakarta Sans', sans-serif;",
			foreColor: '#adb0bb',
			height: 155,
			toolbar: {
				show: false,
			},
			type: 'donut',
		},
		colors: [primary, primarylight, '#F9F9FD'],
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
		plotOptions: {
			pie: {
				donut: {
					background: 'transparent',
					size: '75%',
				},
				endAngle: 360,
				startAngle: 0,
			},
		},
		responsive: [
			{
				breakpoint: 991,
				options: {
					chart: {
						width: 120,
					},
				},
			},
		],
		stroke: {
			show: false,
		},
		tooltip: {
			fillSeriesColor: false,
			theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
		},
	}
	const seriescolumnchart: any = [38, 40, 25]

	return (
		<DashboardCard title="Yearly Breakup">
			<Grid container spacing={3}>
				{/* Column */}
				<Grid item xs={7} sm={7}>
					<Typography variant="h3" fontWeight="700">
						$36,358
					</Typography>
					<Stack direction="row" spacing={1} mt={1} alignItems="center">
						<Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
							<IconArrowUpLeft width={20} color="#39B69A" />
						</Avatar>
						<Typography variant="subtitle2" fontWeight="600">
							+9%
						</Typography>
						<Typography variant="subtitle2" color="textSecondary">
							last year
						</Typography>
					</Stack>
					<Stack spacing={3} mt={5} direction="row">
						<Stack direction="row" spacing={1} alignItems="center">
							<Avatar
								sx={{
									bgcolor: primary,
									height: 9,
									svg: {
										display: 'none',
									},
									width: 9,
								}}
							></Avatar>
							<Typography variant="subtitle2" color="textSecondary">
								2022
							</Typography>
						</Stack>
						<Stack direction="row" spacing={1} alignItems="center">
							<Avatar
								sx={{
									bgcolor: primarylight,
									height: 9,
									svg: {
										display: 'none',
									},
									width: 9,
								}}
							></Avatar>
							<Typography variant="subtitle2" color="textSecondary">
								2023
							</Typography>
						</Stack>
					</Stack>
				</Grid>
				{/* Column */}
				<Grid item xs={5} sm={5}>
					<Chart
						options={optionscolumnchart}
						series={seriescolumnchart}
						type="donut"
						height="150px"
					/>
				</Grid>
			</Grid>
		</DashboardCard>
	)
}

export default YearlyBreakup
