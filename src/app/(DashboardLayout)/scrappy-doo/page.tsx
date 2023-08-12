'use client'

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import {
	Avatar,
	Box,
	Chip,
	Collapse,
	IconButton,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material'
import Link from 'next/link'

import PageContainer from '@/app/components/container/PageContainer'
import BlankCard from '@/app/components/shared/BlankCard'
import ParentCard from '@/app/components/shared/ParentCard'
import Breadcrumb from '@/app/layout/shared/breadcrumb/Breadcrumb'

function createData(
	imgSrc?: string,
	label?: string,
	city?: string,
	type?: string,
	minPrice?: number,
	maxPrice?: number,
	rooms?: number
) {
	return {
		imgSrc,
		label,
		city,
		type,
		minPrice,
		maxPrice,
		rooms,
		history: [
			{
				date: '2021-02-05',
				scrapped: 5520,
				avgPrice: '470K',
				matches: 225,
			},
			{
				date: '2021-02-02',
				scrapped: 2410,
				avgPrice: '500K',
				matches: 112,
			},
		],
	}
}

// eslint-disable-next-line max-lines-per-function
function Row(props: { row: ReturnType<typeof createData> }) {
	const { row } = props
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell>
					<Stack direction="row" spacing={2} alignItems="center">
						<Avatar
							src={row.imgSrc}
							alt={row.imgSrc}
							sx={{
								width: 90,
								height: 70,
								borderRadius: '10px',
							}}
						/>
						<Typography
							color="inherit"
							variant="h6"
							fontWeight="600"
							component={Link}
							href={`/scrappy-doo/results`}
						>
							{row.label}
						</Typography>
					</Stack>
				</TableCell>
				<TableCell>
					<Typography color="textSecondary" variant="h6">
						{row.city}
					</Typography>
				</TableCell>
				<TableCell>
					<Chip
						size="small"
						label={row.type}
						color="success"
						sx={{ borderRadius: '6px' }}
					/>
				</TableCell>
				<TableCell>
					<Typography color="textSecondary" variant="h6" fontWeight="400">
						${row.minPrice} - ${row.maxPrice}
					</Typography>
				</TableCell>
				<TableCell>
					<Typography color="textSecondary" fontWeight="400">
						{row.rooms}
					</Typography>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					sx={{
						paddingBottom: 0,
						paddingTop: 0,
					}}
					colSpan={6}
				>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box margin={1}>
							<Typography
								gutterBottom
								variant="h6"
								sx={{
									mt: 2,
									fontSize: '0.8rem',
									p: '5px 15px',
									textTransform: 'uppercase',
									color: (theme) =>
										`${
											theme.palette.mode === 'dark'
												? theme.palette.grey.A200
												: 'rgba(0, 0, 0, 0.87)'
										}`,
								}}
							>
								Summary
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>
											<Typography variant="h6">Date</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="h6">Scrapped</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="h6">Matches</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="h6">Avg. price (u$d)</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.history.map((historyRow: any) => (
										<TableRow key={historyRow.date}>
											<TableCell>
												<Typography color="textSecondary" fontWeight="400">
													{historyRow.date}
												</Typography>
											</TableCell>
											<TableCell>
												<Typography color="textSecondary" fontWeight="400">
													{historyRow.scrapped}
												</Typography>
											</TableCell>
											<TableCell>
												<Typography color="textSecondary" fontWeight="400">
													{historyRow.matches}
												</Typography>
											</TableCell>
											<TableCell>
												<Typography fontWeight="600">
													{historyRow.avgPrice}
												</Typography>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	)
}

const rows = [
	createData(
		'/images/tools/scrappy-doo/bot.jpg',
		'Depto grande en palermo',
		'CABA',
		'departamento',
		400,
		500,
		2
	),
	createData(
		'/images/tools/scrappy-doo/bot.jpg',
		'Depto grande en Recoleta',
		'CABA',
		'departamento',
		400,
		590,
		1
	),
	createData(
		'/images/tools/scrappy-doo/bot.jpg',
		'Depto chico en Palermo',
		'CABA',
		'departamento',
		450,
		590,
		2
	),
	createData(
		'/images/tools/scrappy-doo/bot.jpg',
		'Local para peluquería',
		'CABA',
		'local',
		350,
		590,
		6
	),
]

const ScrappyDoo = () => {
	const { t } = useTranslation()
	const BCrumb = [
		{
			to: '/',
			title: t('Home'),
		},
		{
			title: t('ScrappyDoo'),
		},
	]

	return (
		<PageContainer title={t('ScrappyDoo')} description={t('scrappyDoo.title')}>
			{/* breadcrumb */}
			<Breadcrumb title={t('ScrappyDoo')} items={BCrumb} />
			{/* end breadcrumb */}
			<ParentCard title={t('scrappyDoo.table.title')}>
				<BlankCard>
					<TableContainer component={Paper}>
						<Table
							aria-label="collapsible table"
							sx={{
								whiteSpace: {
									xs: 'nowrap',
									sm: 'unset',
								},
							}}
						>
							<TableHead>
								<TableRow>
									<TableCell />
									<TableCell>
										<Typography variant="h6">Label</Typography>
									</TableCell>
									<TableCell>
										<Typography variant="h6">City</Typography>
									</TableCell>
									<TableCell>
										<Typography variant="h6">Type</Typography>
									</TableCell>
									<TableCell>
										<Typography variant="h6">Range</Typography>
									</TableCell>
									<TableCell>
										<Typography variant="h6">Rooms</Typography>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<Row key={row.pname} row={row} />
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</BlankCard>
			</ParentCard>
		</PageContainer>
	)
}

export default ScrappyDoo
