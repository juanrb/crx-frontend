import { Card } from '@mui/material'
import React from 'react'

type Props = {
	className?: string
	children: React.JSX.Element | React.JSX.Element[]
}

const BlankCard = ({ children, className }: Props) => (
	<Card
		sx={{ p: 0, position: 'relative' }}
		className={className}
		elevation={9}
		// eslint-disable-next-line no-undefined
		variant={undefined}
	>
		{children}
	</Card>
)

export default BlankCard
