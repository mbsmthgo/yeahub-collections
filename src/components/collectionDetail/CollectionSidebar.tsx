import styles from './CollectionSidebar.module.css'
import type {Author, Specialization} from "@/types/common.ts";
import FilterBadge from "@/components/common/FilterBadge.tsx";
import type {Company} from "@/types/collection.ts";
import companyImage from '@/assets/company-backup.png'
import tgIcon from '@/assets/tg-purple.svg'
import closeIcon from "@/assets/close.svg";

interface CollectionSidebarProps {
    title: string | undefined
    specializations: Specialization[] | undefined
    isFree: boolean | undefined
    company: Company | undefined
    author: Author | undefined
    questionsCount: number | undefined
    keywords: string[] | undefined
    sidebarOpen: boolean
    setSidebarOpen: (value: boolean) => void
}

export default function CollectionSidebar({
                                              title, specializations, isFree, company,
                                              author, questionsCount,
                                              keywords, sidebarOpen, setSidebarOpen
                                          }: CollectionSidebarProps) {
    return (
        <div className={`${styles.collectionSidebar} ${sidebarOpen ? styles.collectionSidebar_open : ''}`}>
            {sidebarOpen && <button className={styles.closeBtn} onClick={() => setSidebarOpen(false)}>
                <img src={closeIcon} alt='Close Collection Tags'/>
            </button>}
            <div className={styles.filterContainer}>
                <p className={styles.filterTitle}>Специализация</p>
                <div className={styles.badgesContainer}>
                    {specializations?.map(specialization => (
                        <FilterBadge key={specialization.id}
                                     variant='informational'>
                            {specialization.title}
                        </FilterBadge>))}
                </div>
            </div>
            <div className={styles.filterContainer}>
                <p className={styles.filterTitle}>Доступ</p>
                <FilterBadge variant='informational'>
                    {isFree ? 'Для всех' : 'Для участников'}
                </FilterBadge>
            </div>
            <div className={styles.filterContainer}>
                <p className={styles.filterTitle}>Компания</p>
                <FilterBadge variant='informational'>
                    <img src={companyImage} alt='Company Logo' className={styles.companyImage_mini}/>
                    {company?.title ?? title}
                </FilterBadge>
            </div>
            <p className={styles.filterTitle}>Автор: <span
                className={styles.highlightedText}>{author?.username ?? 'Аноним'}</span></p>
            <div className={styles.filterContainer}>
                <p className={styles.filterTitle}>Количество вопросов</p>
                <FilterBadge variant='informational'>
                    {questionsCount}
                </FilterBadge>
            </div>
            <div className={styles.filterContainer}>
                <p className={styles.filterTitle}>Ключевые слова</p>
                <div className={styles.badgesContainer}>
                    {keywords?.map(keyword => <span key={keyword} className={styles.highlightedText}>#{keyword}</span>)}
                </div>
            </div>
            <FilterBadge variant='informational'>
                <div className={styles.adContainer}>
                    <img src={tgIcon} alt='Channel Telegram'/>
                    <p className={styles.adText}>Подпишись на <span
                        className={styles.highlightedText}>Python Developer</span> в Telegram</p>
                </div>
            </FilterBadge>
        </div>
    )
}