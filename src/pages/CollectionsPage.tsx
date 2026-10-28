import styles from './CollectionsPage.module.css'
import {useFetch} from "@/hooks/useFetch.ts";
import {fetchCollections} from "@/api/collectionsApi.ts";
import {useCallback, useMemo, useState} from "react";
import CollectionCard from "@/components/collections/CollectionCard.tsx";
import CollectionsFilters from "@/components/collections/CollectionsFilters.tsx";
import {useSearchParams} from "react-router-dom";
import type {RequestOptions} from "@/api/apiClient.ts";
import type {Filters} from "@/types/filters.ts";
import {usePageChange} from "@/hooks/usePageChange.ts";

export default function CollectionsPage() {

    const [filtersOpen, setFiltersOpen] = useState(false)

    const [searchParams] = useSearchParams()

    const {currentPage, handlePageChange} = usePageChange()

    const filters: Filters = useMemo(() => {

        const specParam = searchParams.get('specializations')
        const freeParam = searchParams.get('isFree')

        return {
            titleOrDescriptionSearch: searchParams.get('search') || '',
            specializations: specParam ? Number(specParam) : null,
            isFree: freeParam === 'true' ? true : freeParam === 'false' ? false : null,
            page: currentPage,
            limit: 10
        }

    }, [searchParams])

    const fetcher = useCallback((options: RequestOptions) => {
        return fetchCollections({...options, params: filters})
    }, [filters])
    const {data: collectionsResponse, loading, error} = useFetch(fetcher)

    const totalPages = Math.ceil((collectionsResponse?.total ?? 0) / 10) || 1

    return (
        <main className={styles.main_collections}>
            <CollectionCard collections={collectionsResponse?.data} loading={loading} error={error}
            currentPage={filters.page ?? 1} totalPages={totalPages} onPageChange={handlePageChange}
            setFiltersOpen={setFiltersOpen} />
            <CollectionsFilters filters={filters} filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen}/>
        </main>
    )
}