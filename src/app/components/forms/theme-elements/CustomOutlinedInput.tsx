import React from 'react'
import { OutlinedInput } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomOutlinedInput = styled((props: any) => (
	<OutlinedInput {...props} />
))(({ theme }) => ({
	'& .MuiOutlinedInput-input::-webkit-input-placeholder': {
		color: theme.palette.text.secondary,
		opacity: '0.8',
	},

	'& .MuiTypography-root': {
		color: theme.palette.text.secondary,
	},

	'& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
		color: theme.palette.text.secondary,
		opacity: '1',
	},
}))

export default CustomOutlinedInput
