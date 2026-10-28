import styles from './DetailAnswerCard.module.css'
import arrowDownUpIcon from '@/assets/arrow-down-purple.svg'
import {useState} from "react";

export default function DetailAnswerCard({longAnswer}: {longAnswer: string}) {

    const [isFull, setIsFull] = useState<boolean>(false)

    return (
        <div className={styles.detailAnswerCard}>
            <h3 className={styles.title}>Развёрнутый ответ</h3>
            <div className={`${styles.description} ${!isFull ? styles.description_clipped : '' }`}
                 dangerouslySetInnerHTML={{__html: `<p>${longAnswer}</p>`}}/>
            <button onClick={() => setIsFull(prev => !prev)}
                    className={styles.detailAnswerBtn}>
                {isFull ? 'Свернуть' : 'Развернуть'}
                <img style={{transform: `${isFull ? 'rotate(180deg)' : ''}`}}
                     src={arrowDownUpIcon} alt='Show/Hide Full Answer'/>
            </button>
        </div>
    )
}