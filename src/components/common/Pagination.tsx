import styles from './Pagination.module.css'
import {DOTS, generatePagesRange} from "@/utils/generatePagesRange.ts";
import {useMemo} from "react";
import arrowLeftRightIcon from '@/assets/arrow-left.svg'

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function Pagination({currentPage, totalPages, onPageChange}: PaginationProps) {
    const pages = useMemo(() => {
        return generatePagesRange(totalPages, currentPage)
    }, [totalPages, currentPage])

    if (totalPages <= 1) return null

    return (
        <div className={styles.pagination}>
            <button className={styles.pageArrow}
                    onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>
                <img src={arrowLeftRightIcon} alt='Arrow Left Icon'/>
            </button>
            {pages.map(((page, index) => {
                if (page === DOTS) return <span key={`dots-${index}`}>...</span>
                return (
                    <button key={page} className={`${styles.pageNumber} ${page === currentPage ? styles.pageNumber_active : ''}`}
                            onClick={() => onPageChange(page)} disabled={page === currentPage}>
                        {page}
                    </button>
                )
            }))}
            <button className={styles.pageArrow}
                    onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
                <img style={{transform: 'rotate(180deg'}}
                     src={arrowLeftRightIcon} alt='Arrow Right Icon'/>
            </button>
        </div>
    )
}