import styles from './CollectionItem.module.css'
import type {Collection} from "@/types/collection.ts";
import companyBackupImage from '@/assets/company-backup.png'
import membersIcon from '@/assets/members-icon-purple.svg'
import questionsIcon from '@/assets/questions-icon.svg'
import {getWordEnding} from "@/utils/getWordEnding.ts";
import {useNavigate} from "react-router-dom";

export default function CollectionItem({collection}: { collection: Collection }) {

    const questionForm = getWordEnding('вопрос', collection?.questionsCount)
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/collections/${collection.id}`)}
            className={styles.collectionItem}>
            <div className={styles.companyImage_container}>
                <img className={styles.companyImage}
                    src={companyBackupImage} alt='Company Logo'/>
            </div>
            <div className={styles.collectionItem_infoContainer}>
                <div className={styles.badgesGroup}>
                    {collection?.keywords.map(keyword => (
                        <span className={styles.tagBadge} key={keyword}>
                            {keyword}
                        </span>
                    ))}
                </div>
                <h2 className={styles.collectionItem_title}>{collection?.title}</h2>
                <div className={styles.badgesGroup}>
                    <span className={styles.accessBadge}>
                        {!collection?.isFree && <img src={membersIcon} alt='For Members'/>}
                        {collection?.isFree ? 'Для всех' : 'Для участников'}
                    </span>
                    <span className={styles.accessBadge}>
                        <img src={questionsIcon} alt='Question Icon'/>
                        {collection?.questionsCount} {questionForm}
                    </span>
                </div>
                <div className={styles.badgesGroup}>
                    {collection?.specializations.map(specialization => (
                        <span className={styles.specializationBadge}
                              key={specialization.id}>{specialization.title}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}