import { User } from '@/app/api/types'
import { useQuery } from '@tanstack/react-query'

const getUsers = async () =>
	(await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
		res.json()
	)) as User[]

export const useUsers = () => {
	const STALE = 5000
	return useQuery<User[]>({
		queryFn: () => getUsers(),
		queryKey: ['users'],
		staleTime: STALE,
		suspense: true,
	})
}
