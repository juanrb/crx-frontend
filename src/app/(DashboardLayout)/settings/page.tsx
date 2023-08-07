'use client'

import React, { Suspense } from 'react'

import DashboardCard from '../components/shared/DashboardCard'
import PageContainer from '../components/container/PageContainer'

export default function Settings() {
	return (
		<PageContainer title="Settings" description="Settings page">
			<DashboardCard title="Settings">
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
