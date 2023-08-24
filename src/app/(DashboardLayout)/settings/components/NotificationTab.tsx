import React from 'react'
import {
	Avatar,
	Box,
	Button,
	CardContent,
	Grid,
	IconButton,
	Tooltip,
	Typography,
} from '@mui/material'
import { Stack } from '@mui/system'
import {
	IconArticle,
	IconCheckbox,
	IconClock,
	IconDownload,
	IconMail,
	IconPlayerPause,
	IconTruckDelivery,
} from '@tabler/icons-react'

import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel'
import CustomSwitch from '@/app/components/forms/theme-elements/CustomSwitch'
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField'
import BlankCard from '@/app/components/shared/BlankCard'

// eslint-disable-next-line max-lines-per-function
const NotificationTab = () => {
	return (
		<>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} lg={9}>
					<BlankCard>
						<CardContent>
							<Typography variant="h4" mb={2}>
								Notification Preferences
							</Typography>
							<Typography color="textSecondary">
								Select the notificaitons ou would like to receive via email.
								Please note that you cannot opt out of receving service
								messages, such as payment, security or legal notifications.
							</Typography>

							<CustomFormLabel htmlFor="text-email">
								Email Address*
							</CustomFormLabel>
							<CustomTextField id="text-email" variant="outlined" fullWidth />
							<Typography color="textSecondary">
								Required for notificaitons.
							</Typography>

							{/* list 1 */}
							<Stack direction="row" spacing={2} mt={4}>
								<Avatar
									variant="rounded"
									sx={{
										bgcolor: 'grey.100',
										color: 'grey.500',
										width: 48,
										height: 48,
									}}
								>
									<IconArticle size="22" />
								</Avatar>
								<Box>
									<Typography variant="h6" mb={1}>
										Our newsletter
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										We&apos;ll always let you know about important changes
									</Typography>
								</Box>
								<Box sx={{ ml: 'auto !important' }}>
									<CustomSwitch />
								</Box>
							</Stack>

							{/* list 2 */}
							<Stack direction="row" spacing={2} mt={3}>
								<Avatar
									variant="rounded"
									sx={{
										bgcolor: 'grey.100',
										color: 'grey.500',
										width: 48,
										height: 48,
									}}
								>
									<IconCheckbox size="22" />
								</Avatar>
								<Box>
									<Typography variant="h6" mb={1}>
										Order Confirmation
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										You will be notified when customer order any product
									</Typography>
								</Box>
								<Box sx={{ ml: 'auto !important' }}>
									<CustomSwitch checked />
								</Box>
							</Stack>

							{/* list 3 */}
							<Stack direction="row" spacing={2} mt={3}>
								<Avatar
									variant="rounded"
									sx={{
										bgcolor: 'grey.100',
										color: 'grey.500',
										width: 48,
										height: 48,
									}}
								>
									<IconClock size="22" />
								</Avatar>
								<Box>
									<Typography variant="h6" mb={1}>
										Order Status Changed
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										You will be notified when customer make changes to the order
									</Typography>
								</Box>
								<Box sx={{ ml: 'auto !important' }}>
									<CustomSwitch checked />
								</Box>
							</Stack>

							{/* list 4 */}
							<Stack direction="row" spacing={2} mt={3}>
								<Avatar
									variant="rounded"
									sx={{
										bgcolor: 'grey.100',
										color: 'grey.500',
										width: 48,
										height: 48,
									}}
								>
									<IconTruckDelivery size="22" />
								</Avatar>
								<Box>
									<Typography variant="h6" mb={1}>
										Order Delivered
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										You will be notified once the order is delivered
									</Typography>
								</Box>
								<Box sx={{ ml: 'auto !important' }}>
									<CustomSwitch />
								</Box>
							</Stack>

							{/* list 5 */}
							<Stack direction="row" spacing={2} mt={3}>
								<Avatar
									variant="rounded"
									sx={{
										bgcolor: 'grey.100',
										color: 'grey.500',
										width: 48,
										height: 48,
									}}
								>
									<IconMail size="22" />
								</Avatar>
								<Box>
									<Typography variant="h6" mb={1}>
										Email Notification
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										Turn on email notificaiton to get updates through email
									</Typography>
								</Box>
								<Box sx={{ ml: 'auto !important' }}>
									<CustomSwitch checked />
								</Box>
							</Stack>
						</CardContent>
					</BlankCard>
				</Grid>

				{/* 2 */}
				<Grid item xs={12} lg={9}>
					<BlankCard>
						<CardContent>
							<Typography variant="h4" mb={2}>
								Date & Time
							</Typography>
							<Typography color="textSecondary">
								Time zones and calendar display settings.
							</Typography>

							{/* list 1 */}
							<Stack direction="row" spacing={2} mt={4}>
								<Avatar
									variant="rounded"
									sx={{
										bgcolor: 'grey.100',
										color: 'grey.500',
										width: 48,
										height: 48,
									}}
								>
									<IconClock size="22" />
								</Avatar>
								<Box>
									<Typography variant="subtitle1" color="textSecondary">
										Time zone
									</Typography>
									<Typography variant="h6" mb={1}>
										(UTC + 02:00) Athens, Bucharet
									</Typography>
								</Box>
								<Box sx={{ ml: 'auto !important' }}>
									<Tooltip title="Download">
										<IconButton>
											<IconDownload size="22" />
										</IconButton>
									</Tooltip>
								</Box>
							</Stack>
						</CardContent>
					</BlankCard>
				</Grid>

				{/* 3 */}
				<Grid item xs={12} lg={9}>
					<BlankCard>
						<CardContent>
							<Typography variant="h4" mb={2}>
								Ignore Tracking
							</Typography>

							{/* list 1 */}
							<Stack direction="row" spacing={2} mt={4}>
								<Avatar
									variant="rounded"
									sx={{
										bgcolor: 'grey.100',
										color: 'grey.500',
										width: 48,
										height: 48,
									}}
								>
									<IconPlayerPause size="22" />
								</Avatar>
								<Box>
									<Typography variant="h6" mb={1}>
										Ignore Browser Tracking
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										Browser Cookie
									</Typography>
								</Box>
								<Box sx={{ ml: 'auto !important' }}>
									<CustomSwitch />
								</Box>
							</Stack>
						</CardContent>
					</BlankCard>
				</Grid>
			</Grid>

			<Stack direction="row" spacing={2} sx={{ justifyContent: 'end' }} mt={3}>
				<Button size="large" variant="contained" color="primary">
					Save
				</Button>
				<Button size="large" variant="text" color="error">
					Cancel
				</Button>
			</Stack>
		</>
	)
}

export default NotificationTab
