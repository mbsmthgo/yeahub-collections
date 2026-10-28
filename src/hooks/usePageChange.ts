import {useSearchParams} from "react-router-dom";

export const usePageChange = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const handlePageChange = (page: number) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('page', String(page))
        setSearchParams(newParams, {replace: true})
    }

    const currentPage = Number(searchParams.get('page')) || 1

    return {currentPage, handlePageChange}

}