// "use client"

import { Button } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import Styles from './styles'

type Props = {}

export default function Page({}: Props) {
	const a = 1

	return (
		<div>
			<Styles.Title>
				<AcUnitIcon />
				{'Dashboard'}
			</Styles.Title>
			<Button variant="outlined">{'Text'}</Button>
		</div>
	)
}
