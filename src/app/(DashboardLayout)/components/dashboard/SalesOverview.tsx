/* eslint-disable no-magic-numbers */
import { MenuItem, Select } from '@mui/material'

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard'
import React from 'react'
import dynamic from 'next/dynamic'
import { useTheme } from '@mui/material/styles'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

// eslint-disable-next-line max-lines-per-function
const SalesOverview = () => {
	// Select
	const [month, setMonth] = React.useState('1')

	const handleChange = (event: any) => {
		setMonth(event.target.value)
	}

	// Chart color
	const theme = useTheme()
	const primary = theme.palette.primary.main
	const secondary = theme.palette.secondary.main

	// Chart
	const optionscolumnchart: any = {
		chart: {
			fontFamily: "'Plus Jakarta Sans', sans-serif;",
			foreColor: '#adb0bb',
			height: 370,
			toolbar: {
				show: true,
			},
			type: 'bar',
		},
		colors: [primary, secondary],
		dataLabels: {
			enabled: false,
		},
		grid: {
			borderColor: 'rgba(0,0,0,0.1)',
			strokeDashArray: 3,
			xaxis: {
				lines: {
					show: false,
				},
			},
		},
		legend: {
			show: false,
		},
		plotOptions: {
			bar: {
				barHeight: '60%',
				borderRadius: [6],
				borderRadiusApplication: 'end',
				borderRadiusWhenStacked: 'all',
				columnWidth: '42%',
				horizontal: false,
			},
		},
		stroke: {
			colors: ['transparent'],
			lineCap: 'butt',
			show: true,
			width: 5,
		},
		tooltip: {
			fillSeriesColor: false,
			theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
		},
		xaxis: {
			axisBorder: {
				show: false,
			},
			categories: [
				'16/08',
				'17/08',
				'18/08',
				'19/08',
				'20/08',
				'21/08',
				'22/08',
				'23/08',
			],
		},
		yaxis: {
			tickAmount: 4,
		},
	}
	const seriescolumnchart: any = [
		{
			data: [355, 390, 300, 350, 390, 180, 355, 390],
			name: 'Eanings this month',
		},
		{
			data: [280, 250, 325, 215, 250, 310, 280, 250],
			name: 'Expense this month',
		},
	]

	return (
		<DashboardCard
			title="Sales Overview"
			action={
				<Select
					labelId="month-dd"
					id="month-dd"
					value={month}
					size="small"
					onChange={handleChange}
				>
					<MenuItem value={1}>March 2023</MenuItem>
					<MenuItem value={2}>April 2023</MenuItem>
					<MenuItem value={3}>May 2023</MenuItem>
				</Select>
			}
		>
			<Chart
				options={optionscolumnchart}
				series={seriescolumnchart}
				type="bar"
				height="370px"
			/>
		</DashboardCard>
	)
}

export default SalesOverview
