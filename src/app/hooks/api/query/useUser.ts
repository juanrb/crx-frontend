import { DEFAULT_REACT_QUERY_STALE_TIME } from '@/app/constants/api'
import { User } from '@/app/api/types'
import { useQuery } from '@tanstack/react-query'

const getUser = async () =>
	(await fetch('https://jsonplaceholder.typicode.com/user').then((res) =>
		res.json()
	)) as User

export const useUser = () =>
	useQuery<User>({
		queryFn: () => getUser(),
		queryKey: ['user'],
		staleTime: DEFAULT_REACT_QUERY_STALE_TIME,
		suspense: true,
	})
