import { useEffect, useState } from 'react'

export function useFetch(url) {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (!url) return

		const getData = async () => {
			setLoading(true)
			const response = await fetch(url)
			const json = await response.json()
			setData(json)
			setLoading(false)
		}

		getData()
	}, [url])

	return { data, loading }
}
