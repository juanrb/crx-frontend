import { DEFAULT_REACT_QUERY_STALE_TIME } from '@/app/constants/api'
import { User } from '@/app/api/types'
import { useQuery } from '@tanstack/react-query'

const getSettings = async () =>
	(await fetch('https://jsonplaceholder.typicode.com/user/settings').then(
		(res) => res.json()
	)) as User[]

export const useSettings = () =>
	useQuery<User[]>({
		queryFn: () => getSettings(),
		queryKey: ['settings'],
		staleTime: DEFAULT_REACT_QUERY_STALE_TIME,
		suspense: true,
	})
