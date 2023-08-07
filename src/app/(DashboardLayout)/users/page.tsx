'use client'

import React, { Suspense } from 'react'

import PageContainer from '@/app/components/container/PageContainer'
import DashboardCard from '@/app/components/shared/DashboardCard'

export default function Users() {
	return (
		<PageContainer title="Users" description="Users page">
			<DashboardCard title="Users">
				<Suspense
					fallback={
						<p style={{ textAlign: 'center' }}>loading... on initial request</p>
					}
				>
					Some content
				</Suspense>
			</DashboardCard>
		</PageContainer>
	)
}
