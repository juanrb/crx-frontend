'use client'

import { useQuery } from '@tanstack/react-query'

type User = {
	id: number
	name: string
	email: string
}

const getUsers = async () =>
	(await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
		res.json()
	)) as User[]

export default function ListUsers() {
	const STALE = 5000
	const { data, isLoading, isFetching, error } = useQuery<User[]>({
		queryFn: () => getUsers(),
		queryKey: ['hydrate-users'],
		staleTime: STALE,
		suspense: true,
	})

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
