import styles from './QuestionNavigation.module.css'
import arrowBackNextIcon from '@/assets/arrow-down.svg'

export default function QuestionNavigation() {
    return (
        <div className={styles.questionNavigationCard}>
            <button className={styles.navBtn}>
                <img style={{transform: 'rotate(90deg)'}}
                     src={arrowBackNextIcon} alt='Previous Question'/>
                Предыдущий
            </button>
            <button className={styles.navBtn}>
                Следующий
                <img style={{transform: 'rotate(270deg)'}}
                     src={arrowBackNextIcon} alt='Next Question'/>
            </button>
        </div>
    )
}