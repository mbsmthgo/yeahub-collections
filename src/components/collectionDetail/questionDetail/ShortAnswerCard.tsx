import styles from './ShortAnswerCard.module.css'

export default function ShortAnswerCard({shortAnswer}: {shortAnswer: string}) {
    return (
        <div className={styles.shortAnswerCard}>
            <h3 className={styles.title}>Краткий ответ</h3>
            <div className={styles.description}
                 dangerouslySetInnerHTML={{__html: `<p>${shortAnswer}</p>`}}/>
        </div>
    )
}