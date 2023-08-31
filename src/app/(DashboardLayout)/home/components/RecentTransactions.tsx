import React from 'react'
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	timelineOppositeContentClasses,
	TimelineSeparator,
} from '@mui/lab'
import { Link, Typography } from '@mui/material'

import DashboardCard from '@/app/components/shared/DashboardCard'

const RecentTransactions = () => {
	return (
		<DashboardCard title="Recent Activity">
			<>
				<Timeline
					className="theme-timeline"
					nonce={undefined}
					onResize={undefined}
					onResizeCapture={undefined}
					sx={{
						p: 0,
						mb: '-40px',
						[`& .${timelineOppositeContentClasses.root}`]: {
							flex: 0.5,
							paddingLeft: 0,
						},
					}}
				>
					<TimelineItem>
						<TimelineOppositeContent>Aug 23</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="primary" variant="outlined" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							CRB - Ongoing Rent Reporting - Approved (1/3)
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent>Jul 17</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" variant="outlined" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Typography fontWeight="600">CRC - Signup</Typography>{' '}
							<Link href="/" underline="none">
								#ML-3467
							</Link>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent>Apr 30</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="success" variant="outlined" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							Referrals - New Referral - Approved
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent>Mar 2</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="warning" variant="outlined" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Typography fontWeight="600">Bond card received</Typography>{' '}
							<Link href="/" underline="none">
								#ML-3467
							</Link>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent>Feb 20</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="error" variant="outlined" />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Typography fontWeight="600">
								CRB - Past Rent Reporting - Sent
							</Typography>{' '}
							<Link href="/" underline="none">
								#ML-3467
							</Link>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent>12:00 am</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="success" variant="outlined" />
						</TimelineSeparator>
						<TimelineContent>Payment Done</TimelineContent>
					</TimelineItem>
				</Timeline>
			</>
		</DashboardCard>
	)
}

export default RecentTransactions
