'use client'

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard'
import ListUsers from './components/ListUsers'
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer'
import { Suspense } from 'react'

const SamplePage = () => (
	<PageContainer title="Sample Page" description="this is Sample page">
		<DashboardCard title="Sample Page">
			<Suspense
				fallback={
					<p style={{ textAlign: 'center' }}>loading... on initial request</p>
				}
			>
				<ListUsers />
			</Suspense>
		</DashboardCard>
	</PageContainer>
)

export default SamplePage
