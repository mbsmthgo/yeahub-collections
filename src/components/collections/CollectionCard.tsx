import styles from './CollectionCard.module.css';
import type {Collection} from "@/types/collection.ts";
import CollectionItem from "./CollectionItem.tsx";
import Pagination from "@/components/common/Pagination.tsx";
import filtersIcon from '@/assets/filters.svg'

interface CollectionCardProps {
    collections: Collection[] | undefined
    loading: boolean
    error: Error | null
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    setFiltersOpen: (value: boolean) => void
}

export default function CollectionCard({
                                           collections,
                                           loading,
                                           error,
                                           currentPage,
                                           totalPages,
                                           onPageChange,
                                           setFiltersOpen
                                       }: CollectionCardProps) {
    return (
        <div className={styles.collectionCard}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Коллекции</h1>
                <button onClick={() => setFiltersOpen(true)}
                        className={styles.filtersBtn}>
                    <img src={filtersIcon} alt='Filters Icon'/>
                </button>
            </div>
            {loading ? <p>Загрузка...</p> : error ? <p className='error'>Что-то пошло не так... {error.message}</p> : (
                <>
                    {collections?.length === 0 ? <p>К сожалению, нет доступных коллекций по Вашему запросу...</p> : collections?.map(collection => (
                        <CollectionItem key={collection.id} collection={collection}/>))}
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
                </>
            )}
        </div>
    )
}