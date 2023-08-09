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

import PageContainer from '@/app/components/container/PageContainer'
import BlankCard from '@/app/components/shared/BlankCard'
import ParentCard from '@/app/components/shared/ParentCard'
import Breadcrumb from '@/app/layout/shared/breadcrumb/Breadcrumb'

function createData(
	imgsrc?: string,
	pname?: string,
	customer?: string,
	inventory?: boolean,
	price?: number,
	items?: string
) {
	return {
		imgsrc,
		pname,
		customer,
		inventory,
		price,
		items,
		history: [
			{ date: '2021-02-05', customerId: '15202410', price: 250, amount: 3 },
			{ date: '2021-02-02', customerId: 'Anonymous', price: 600, amount: 1 },
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
							src={row.imgsrc}
							alt={row.imgsrc}
							sx={{
								width: 90,
								height: 70,
								borderRadius: '10px',
							}}
						/>
						<Typography variant="h6" fontWeight="600">
							{row.pname}
						</Typography>
					</Stack>
				</TableCell>
				<TableCell>
					<Typography color="textSecondary" variant="h6">
						{row.customer}
					</Typography>
				</TableCell>
				<TableCell>
					<Chip
						size="small"
						label={row.inventory ? 'In Stock' : 'Out of Stock'}
						color={row.inventory ? 'success' : 'error'}
						sx={{ borderRadius: '6px' }}
					/>
				</TableCell>
				<TableCell>
					<Typography color="textSecondary" variant="h6" fontWeight="400">
						${row.price}
					</Typography>
				</TableCell>
				<TableCell>
					<Typography color="textSecondary" fontWeight="400">
						{row.items}
					</Typography>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box margin={1}>
							<Typography
								gutterBottom
								variant="h5"
								sx={{
									mt: 2,
									backgroundColor: (theme) => theme.palette.grey.A200,
									p: '5px 15px',
									color: (theme) =>
										`${
											theme.palette.mode === 'dark'
												? theme.palette.grey.A200
												: 'rgba(0, 0, 0, 0.87)'
										}`,
								}}
							>
								History
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>
											<Typography variant="h6">Date</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="h6">Customer</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="h6">Amount</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="h6">Total price ($)</Typography>
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
													{historyRow.customerId}
												</Typography>
											</TableCell>
											<TableCell>
												<Typography color="textSecondary" fontWeight="400">
													{historyRow.amount}
												</Typography>
											</TableCell>
											<TableCell>
												<Typography fontWeight="600">
													{Math.round(
														historyRow.amount * historyRow.price * 100
													) / 100}
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
		true,
		250,
		'2'
	),
	createData(
		'/images/tools/scrappy-doo/bot.jpg',
		'Depto grande en Recoleta',
		'CABA',
		false,
		450,
		'1'
	),
	createData(
		'/images/tools/scrappy-doo/bot.jpg',
		'Depto chico en Palermo',
		'CABA',
		false,
		150,
		'2'
	),
	createData(
		'/images/tools/scrappy-doo/bot.jpg',
		'Local para peluquería',
		'CABA',
		true,
		550,
		'6'
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
