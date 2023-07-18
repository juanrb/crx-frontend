import { DEFAULT_REACT_QUERY_STALE_TIME } from '@/app/constants'
import { User } from '@/app/api/types'
import { useQuery } from '@tanstack/react-query'

const getUsers = async () =>
	(await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
		res.json()
	)) as User[]

export const useUsers = () =>
	useQuery<User[]>({
		queryFn: () => getUsers(),
		queryKey: ['users'],
		staleTime: DEFAULT_REACT_QUERY_STALE_TIME,
		suspense: true,
	})
