import AcUnitIcon from '@mui/icons-material/AcUnit'
import { Button } from '@mui/material'
import Styles from './styles'

export default function Page() {
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
