'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

import { setBaseUrl } from '@/api/api-client'

export default function Providers({ children }: React.PropsWithChildren) {
	const [client] = React.useState(new QueryClient())

	setBaseUrl(
		process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL || 'http://localhost:3001'
	)

	return (
		<QueryClientProvider client={client}>
			<ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
