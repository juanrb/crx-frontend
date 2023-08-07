import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomDisabledButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.grey[100],
}))

export default CustomDisabledButton
