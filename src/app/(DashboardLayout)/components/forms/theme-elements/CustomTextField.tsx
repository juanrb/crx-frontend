import React from 'react'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomTextField = styled((props: any) => <TextField {...props} />)(
	({ theme }) => ({
		'& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
			// eslint-disable-next-line no-magic-numbers
			borderColor: theme.palette.grey[200],
		},
		'& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
			color: theme.palette.text.secondary,
			opacity: '1',
		},
		'& .MuiOutlinedInput-input::-webkit-input-placeholder': {
			color: theme.palette.text.secondary,
			opacity: '0.8',
		},
	})
)

export default CustomTextField
