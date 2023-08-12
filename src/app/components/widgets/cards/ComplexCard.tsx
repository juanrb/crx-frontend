import {
	Avatar,
	Box,
	CardContent,
	CardMedia,
	Chip,
	Grid,
	Stack,
	Tooltip,
	Typography,
} from '@mui/material'
import { IconEye, IconMessage2, IconPoint } from '@tabler/icons-react'
import Link from 'next/link'

import BlankCard from '../../shared/BlankCard'

const complexCard = [
	{
		avatar: '/images/profile/user-1.jpg',
		coveravatar:
			'https://http2.mlstatic.com/D_NQ_NP_881799-MLA70906089291_082023-F.webp',
		title: 'Venta Depto Palermo 3 Amb Con Balcón Todo A Nuevo!',
		category: 'Social',
		name: 'Georgeanna Ramero',
		view: '9,125',
		comments: '3',
		time: 'Mon, Dec 19',
	},
	{
		avatar: '/images/profile/user-2.jpg',
		coveravatar:
			'https://http2.mlstatic.com/D_NQ_NP_2X_722040-MLA70906265592_082023-F.webp',
		title: '2 Ambientes Torre Costantini - Full Amenities',
		category: 'Gadget',
		name: 'Georgeanna Ramero',
		view: '4,150',
		comments: '38',
		time: 'Sun, Dec 18',
	},
	{
		avatar: '/images/profile/user-3.jpg',
		coveravatar:
			'https://http2.mlstatic.com/D_NQ_NP_860410-MLA70906265614_082023-F.webp',
		title: 'Departamento En Venta',
		category: 'Health',
		name: 'Georgeanna Ramero',
		view: '9,480',
		comments: '12',
		time: 'Sat, Dec 17',
	},
	{
		avatar: '/images/profile/user-3.jpg',
		coveravatar:
			'https://http2.mlstatic.com/D_NQ_NP_881799-MLA70906089291_082023-F.webp',
		title: 'Venta Depto Palermo 3 Amb Con Balcón Todo A Nuevo!',
		category: 'Social',
		name: 'Georgeanna Ramero',
		view: '9,125',
		comments: '3',
		time: 'Mon, Dec 19',
	},
	{
		avatar: '/images/profile/user-1.jpg',
		coveravatar:
			'https://http2.mlstatic.com/D_NQ_NP_2X_743897-MLA70906265602_082023-F.webp',
		title: '2 Ambientes Torre Costantini - Full Amenities',
		category: 'Gadget',
		name: 'Georgeanna Ramero',
		view: '4,150',
		comments: '38',
		time: 'Sun, Dec 18',
	},
	{
		avatar: '/images/profile/user-2.jpg',
		coveravatar:
			'https://http2.mlstatic.com/D_NQ_NP_2X_644949-MLA70981642625_082023-F.webp',
		title: '2 Ambientes 56m2 C/ Balcón A Estrenar !',
		category: 'Health',
		name: 'Georgeanna Ramero',
		view: '9,480',
		comments: '12',
		time: 'Sat, Dec 17',
	},
]

const ComplexCard = () => {
	return (
		<Grid container spacing={3}>
			{complexCard.map((author, index) => (
				<Grid item xs={12} sm={4} key={index}>
					<BlankCard className="hoverCard">
						<>
							<Typography component={Link} href="/">
								<CardMedia
									component="img"
									height="240"
									image={author.coveravatar}
									alt="green iguana"
								/>
							</Typography>
							<CardContent>
								<Stack direction="row" sx={{ marginTop: '-45px' }}>
									<Tooltip title={author.name} placement="top">
										<Avatar aria-label="recipe" src={author.avatar}></Avatar>
									</Tooltip>
									<Chip
										sx={{
											marginLeft: 'auto',
											marginTop: '-21px',
											backgroundColor: 'white',
										}}
										label="2 min Read"
										size="small"
									></Chip>
								</Stack>
								<Chip
									label={author.category}
									size="small"
									sx={{ marginTop: 2 }}
								></Chip>
								<Box my={3}>
									<Typography
										gutterBottom
										variant="h5"
										color="inherit"
										sx={{ textDecoration: 'none' }}
										component={Link}
										href="/"
									>
										{author.title}
									</Typography>
								</Box>
								<Stack direction="row" gap={3} alignItems="center">
									<Stack direction="row" gap={1} alignItems="center">
										<IconEye size="18" /> {author.view}
									</Stack>
									<Stack direction="row" gap={1} alignItems="center">
										<IconMessage2 size="18" /> {author.comments}
									</Stack>

									<Stack direction="row" ml="auto" alignItems="center">
										<IconPoint size="16" />
										<small>{author.time}</small>
									</Stack>
								</Stack>
							</CardContent>
						</>
					</BlankCard>
				</Grid>
			))}
		</Grid>
	)
}

export default ComplexCard
