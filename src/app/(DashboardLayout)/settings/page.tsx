'use client'

import React, { Suspense } from 'react'
import { Switch } from '@mui/material'

import { setDarkMode } from '@/store/customizer/CustomizerSlice'
import { useDispatch } from '@/store/hooks'

import PageContainer from '../components/container/PageContainer'
import DashboardCard from '../components/shared/DashboardCard'

export default function Settings() {
	const dispatch = useDispatch()
	return (
		<PageContainer title="Settings" description="Settings page">
			<DashboardCard title="Settings">
				<Suspense
					fallback={
						<p style={{ textAlign: 'center' }}>loading... on initial request</p>
					}
				>
					Some content
					<Switch onClick={() => dispatch(setDarkMode('dark'))} />
				</Suspense>
			</DashboardCard>
		</PageContainer>
	)
}
