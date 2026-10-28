import {useEffect, useState} from "react";

interface UseFetchResult<T> {
    data: T | null
    loading: boolean
    error: Error | null
}

export const useFetch = <T>(fetcherFn: (options: {signal: AbortSignal}) => Promise<T>): UseFetchResult<T> => {

    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        let ignore = false
        const controller = new AbortController()

        const fetchData = async () => {
            setLoading(true)
            try {
                const result = await fetcherFn({signal: controller.signal})
                if (!ignore) {
                    setData(result)
                    setError(null)
                }
            } catch (err: unknown) {
                if (!ignore && err instanceof Error && err.name !== 'AbortError') {
                    setError(err)
                }
            } finally {
                if (!ignore) {
                    setLoading(false)
                }
            }
        }
        fetchData()
        return () => {
            ignore = true
            controller.abort()
        }
    }, [fetcherFn])

    return {data, loading, error}
}