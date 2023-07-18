import { Box, Button, Typography } from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'
import img1 from 'public/images/backgrounds/rocket.png'

export const Upgrade = () => (
	<Box
		display={'flex'}
		alignItems="center"
		gap={2}
		sx={{
			bgcolor: `${'primary.light'}`,
			borderRadius: '8px',
			m: 3,
			p: 3,
		}}
	>
		<>
			<Box>
				<Typography variant="h6" mb={1}>
					Unlimited Access
				</Typography>
				<Button
					color="primary"
					target="_blank"
					disableElevation
					component={Link}
					href="https://adminmart.com/product/modernize-next-js-admin-dashboard"
					variant="contained"
					aria-label="logout"
					size="small"
				>
					Upgrade
				</Button>
			</Box>
			<Box mt="-35px">
				<Image alt="Remy Sharp" src={img1} width={100} />
			</Box>
		</>
	</Box>
)
