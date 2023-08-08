'use client'

import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Switch } from '@mui/material'

import PageContainer from '@/app/components/container/PageContainer'
import DashboardCard from '@/app/components/shared/DashboardCard'
import { setDarkMode } from '@/store/customizer/CustomizerSlice'
import { useDispatch } from '@/store/hooks'

export default function Settings() {
	const dispatch = useDispatch()
	const { t } = useTranslation()
	return (
		<PageContainer title={t('Settings')} description={t('settings.title')}>
			<DashboardCard title="Settings">
				<Suspense
					fallback={
						<p style={{ textAlign: 'center' }}>loading... on initial request</p>
					}
				>
					Dark mode
					<Switch onClick={() => dispatch(setDarkMode('dark'))} />
				</Suspense>
			</DashboardCard>
		</PageContainer>
	)
}
