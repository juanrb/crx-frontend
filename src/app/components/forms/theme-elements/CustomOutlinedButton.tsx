import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomOutlinedButton = styled(Button)(({ theme }) => ({
	border: `1px solid ${theme.palette.grey[100]}`,
	color: theme.palette.text.primary,

	'&:hover': {
		border:
			theme.palette.mode === 'dark'
				? `1px solid ${theme.palette.grey[200]}`
				: `1px solid ${theme.palette.grey[300]}`,
		backgroundColor: theme.palette.grey[100],
		color: theme.palette.text.secondary,
	},
}))

export default CustomOutlinedButton
