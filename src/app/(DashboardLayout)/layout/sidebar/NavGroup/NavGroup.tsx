// Mui imports
import { ListSubheader, Theme, styled } from '@mui/material'

import PropTypes from 'prop-types'

type NavGroupType = {
	navlabel?: boolean
	subheader?: string
}

interface ItemType {
	item: NavGroupType
}

const NavGroup = ({ item }: ItemType) => {
	const ListSubheaderStyle = styled((props: Theme | any) => (
		<ListSubheader disableSticky {...props} />
	))(({ theme }) => ({
		...theme.typography.overline,
		color: theme.palette.text.primary,
		fontWeight: '700',
		lineHeight: '26px',
		marginBottom: theme.spacing(0),
		marginTop: theme.spacing(3),
		padding: '3px 12px',
	}))
	return <ListSubheaderStyle>{item.subheader}</ListSubheaderStyle>
}

NavGroup.propTypes = {
	item: PropTypes.object,
}

export default NavGroup
