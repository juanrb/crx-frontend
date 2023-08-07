/* eslint-disable no-undefined */
import { Link, Typography } from '@mui/material'
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
	timelineOppositeContentClasses,
} from '@mui/lab'

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard'

// eslint-disable-next-line max-lines-per-function
const RecentTransactions = () => (
	<DashboardCard title="Recent Transactions">
		<>
			<Timeline
				className="theme-timeline"
				nonce={undefined}
				onResize={undefined}
				onResizeCapture={undefined}
				sx={{
					'& .MuiTimelineConnector-root': {
						backgroundColor: '#efefef',
						width: '1px',
					},
					[`& .${timelineOppositeContentClasses.root}`]: {
						flex: 0.5,
						paddingLeft: 0,
					},
					mb: '-40px',
					// eslint-disable-next-line id-length
					p: 0,
				}}
			>
				<TimelineItem>
					<TimelineOppositeContent>09:30 am</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="primary" variant="outlined" />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						Payment received from John Doe of $385.90
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>10:00 am</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="secondary" variant="outlined" />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Typography fontWeight="600">New sale recorded</Typography>{' '}
						<Link href="/" underline="none">
							#ML-3467
						</Link>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>12:00 am</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="success" variant="outlined" />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						Payment was made of $64.95 to Michael
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>09:30 am</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="warning" variant="outlined" />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Typography fontWeight="600">New sale recorded</Typography>{' '}
						<Link href="/" underline="none">
							#ML-3467
						</Link>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>09:30 am</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="error" variant="outlined" />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Typography fontWeight="600">New arrival recorded</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>12:00 am</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="success" variant="outlined" />
					</TimelineSeparator>
					<TimelineContent>Payment Received</TimelineContent>
				</TimelineItem>
			</Timeline>
		</>
	</DashboardCard>
)

export default RecentTransactions
