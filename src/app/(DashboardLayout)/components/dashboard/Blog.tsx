import {
	CardContent,
	Fab,
	Grid,
	Rating,
	Tooltip,
	Typography,
} from '@mui/material'

import BlankCard from '@/app/(DashboardLayout)/components/shared/BlankCard'
import { IconBasket } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { Stack } from '@mui/system'
import img1 from 'public/images/products/s4.jpg'
import img2 from 'public/images/products/s5.jpg'
import img3 from 'public/images/products/s7.jpg'
import img4 from 'public/images/products/s11.jpg'

const ecoCard = [
	{
		photo: img1,
		price: 285,
		rating: 4,
		salesPrice: 375,
		subheader: 'September 14, 2023',
		title: 'Boat Headphone',
	},
	{
		photo: img2,
		price: 900,
		rating: 5,
		salesPrice: 650,
		subheader: 'September 14, 2023',
		title: 'MacBook Air Pro',
	},
	{
		photo: img3,
		price: 200,
		rating: 3,
		salesPrice: 150,
		subheader: 'September 14, 2023',
		title: 'Red Valvet Dress',
	},
	{
		photo: img4,
		price: 345,
		rating: 2,
		salesPrice: 285,
		subheader: 'September 14, 2023',
		title: 'Cute Soft Teddybear',
	},
]

const Blog = () => (
	<Grid container spacing={3}>
		{ecoCard.map((product, index) => (
			<Grid item xs={12} md={4} lg={3} key={index}>
				<BlankCard>
					<Typography component={Link} href="/">
						<Image
							src={product.photo}
							alt="img"
							style={{ width: '100%', height: '250px' }}
						/>
					</Typography>
					<Tooltip title="Add To Cart">
						<Fab
							size="small"
							color="primary"
							sx={{ bottom: '75px', right: '15px', position: 'absolute' }}
						>
							<IconBasket size="16" />
						</Fab>
					</Tooltip>
					<CardContent sx={{ p: 3, pt: 2 }}>
						<Typography variant="h6">{product.title}</Typography>
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
							mt={1}
						>
							<Stack direction="row" alignItems="center">
								<Typography variant="h6">${product.price}</Typography>
								<Typography
									color="textSecondary"
									ml={1}
									sx={{ textDecoration: 'line-through' }}
								>
									${product.salesPrice}
								</Typography>
							</Stack>
							<Rating
								name="read-only"
								size="small"
								value={product.rating}
								readOnly
							/>
						</Stack>
					</CardContent>
				</BlankCard>
			</Grid>
		))}
	</Grid>
)

export default Blog
