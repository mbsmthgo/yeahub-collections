const BASE_URL = 'https://api.yeatwork.ru'

export interface RequestOptions extends RequestInit {
    params?: Record<string, string | number | boolean | null | undefined | (string | number)[]>
}

const createSearchParams = (params?: RequestOptions['params']): string => {
    if (!params) return ''
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            if (value.length > 0) {
                searchParams.append(key, value.join(','))
            } else {
                searchParams.delete(key)
            }
        } else if (value !== null && value !== undefined && value !== '') {
            searchParams.append(key, String(value))
        }
    })
    const queryString = searchParams.toString()
    return queryString ? `?${queryString}` : ''
}

export const httpClient = async <T>(endpoint: string, options: RequestOptions = {}): Promise<T> => {
    const {params, headers, ...restOptions} = options
    const queryString = createSearchParams(params)
    const url = `${BASE_URL}${endpoint}${queryString}`
    const config: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        ...restOptions
    }
    const response = await fetch(url, config)
    if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`)
    }
    return (await response.json()) as T
}