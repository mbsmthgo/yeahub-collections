import styles from './CollectionBanner.module.css'
import companyImage from '@/assets/company-backup.png'
import filtersIcon from '@/assets/filters.svg'

interface CollectionBannerProps {
    title: string | undefined
    description: string | undefined
    setSidebarOpen: (value: boolean) => void
}

export default function CollectionBanner({title, description, setSidebarOpen}: CollectionBannerProps) {
    return (
        <div className={styles.collectionBanner}>
            <div className={styles.imageContainer}>
                <img src={companyImage} alt='Company Logo' className={styles.companyImage}/>
            </div>
            <div className={styles.companyInfo}>
                <div className={styles.titleTags_container}>
                    <h2 className={styles.title}>{title}</h2>
                    <button onClick={() => setSidebarOpen(true)}
                            className={styles.tagsBtn}>
                        <img src={filtersIcon} alt='Show Collection Tags'/>
                    </button>
                </div>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}