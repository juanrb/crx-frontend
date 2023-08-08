'use client'

import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import PageContainer from '@/app/components/container/PageContainer'
import DashboardCard from '@/app/components/shared/DashboardCard'

export default function Users() {
	const { t } = useTranslation()
	return (
		<PageContainer title={t('Users')} description={t('users.title')}>
			<DashboardCard title={t('Users')}>
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
