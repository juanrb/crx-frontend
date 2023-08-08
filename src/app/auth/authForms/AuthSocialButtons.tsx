import { Avatar, Box } from '@mui/material'
import { Stack } from '@mui/system'

import { signInType } from '@/app/auth/types'
import CustomSocialButton from '@/app/components/forms/theme-elements/CustomSocialButton'

const AuthSocialButtons = ({ title }: signInType) => (
	<>
		<Stack direction="row" justifyContent="center" spacing={2} mt={3}>
			<CustomSocialButton>
				<Avatar
					src={'/images/svgs/google-icon.svg'}
					alt={'icon1'}
					sx={{
						width: 16,
						height: 16,
						borderRadius: 0,
						mr: 1,
					}}
				/>
				<Box
					sx={{
						display: { xs: 'none', sm: 'flex' },
						whiteSpace: 'nowrap',
						mr: { sm: '3px' },
					}}
				>
					{title}{' '}
				</Box>{' '}
				Google
			</CustomSocialButton>
			<CustomSocialButton>
				<Avatar
					src={'/images/svgs/facebook-icon.svg'}
					alt={'icon2'}
					sx={{
						width: 25,
						height: 25,
						borderRadius: 0,
						mr: 1,
					}}
				/>
				<Box
					sx={{
						display: { xs: 'none', sm: 'flex' },
						whiteSpace: 'nowrap',
						mr: { sm: '3px' },
					}}
				>
					{title}{' '}
				</Box>{' '}
				FB
			</CustomSocialButton>
		</Stack>
	</>
)

export default AuthSocialButtons
