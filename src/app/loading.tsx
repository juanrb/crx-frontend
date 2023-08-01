'use client'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100vh',
			}}
		>
			<CircularProgress />
		</Box>
	)
}
