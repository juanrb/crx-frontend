'use client'

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard'
import ListUsers from './components/ListUsers'
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer'
import { Suspense } from 'react'
import { useAddPetMutation, useGetInventoryQuery, useGetUserByNameQuery } from '@/api/api-client/Query'
import { setBaseUrl } from '@/api/api-client'

const SamplePage = () => {
	setBaseUrl('https://petstore.swagger.io/v2')
	const { data, isLoading, isFetching, error } = useGetInventoryQuery()

	console.log(data, 'data')

	return (
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
}

export default SamplePage
