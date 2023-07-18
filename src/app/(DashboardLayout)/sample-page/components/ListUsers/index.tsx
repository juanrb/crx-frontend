'use client'

import { useUsers } from '@/app/hooks/api/query/useUsers'

export default function ListUsers() {
	const { data, isLoading, isFetching, error } = useUsers()

	return (
		<>
			{error && <p>Oh no, there was an error</p>}
			{isFetching ||
				(isLoading && (
					<p style={{ textAlign: 'center' }}>loading... on the client-side</p>
				))}
			{data && (
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr 1fr 1fr',
						gap: 20,
					}}
				>
					{data?.map((user) => (
						<div
							key={user.id}
							style={{ border: '1px solid #ccc', textAlign: 'center' }}
						>
							<img
								src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
								alt={user.name}
								style={{ width: 180, height: 180 }}
							/>
							<h3>{user.name}</h3>
						</div>
					))}
				</div>
			)}
		</>
	)
}
