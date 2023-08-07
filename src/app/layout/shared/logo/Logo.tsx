import { styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const LinkStyled = styled(Link)(() => ({
	display: 'block',
	height: '70px',
	overflow: 'hidden',
	width: '180px',
}))

const Logo = () => (
	<LinkStyled href="/">
		<Image
			src="/images/logos/dark-logo.svg"
			alt="logo"
			height={70}
			width={174}
			priority
		/>
	</LinkStyled>
)

export default Logo
