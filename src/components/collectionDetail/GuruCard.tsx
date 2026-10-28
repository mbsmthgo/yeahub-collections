import styles from './GuruCard.module.css'
import guruPhoto from '@/assets/guru.svg'
import tgPurpleIcon from '@/assets/tg-purple.svg'
import youtubePurpleIcon from '@/assets/youtube-purple.svg'
import profileMediaIcon from '@/assets/profile-media.svg'

export default function GuruCard() {
    return (
        <div className={styles.guruCard}>
            <div className={styles.guruProfile}>
                <img src={guruPhoto} alt='Guru Photo'/>
                <div>
                    <p>Руслан Куянец</p>
                    <p className={styles.guruSpecialization}>Python Guru</p>
                </div>
            </div>
            <p className={styles.guruDescription}>
                Guru – это эксперты YeaHub, которые помогают развивать комьюнити.
            </p>
            <div className={styles.guruMedia}>
                <img src={tgPurpleIcon} alt='Telegram Channel'/>
                <img src={youtubePurpleIcon} alt='Youtube Channel'/>
                <img src={profileMediaIcon} alt='Profile Link'/>
            </div>
        </div>
    )
}