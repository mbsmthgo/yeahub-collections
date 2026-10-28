import styles from './SpecialCollection.module.css'
import Button from "@/components/common/Button.tsx";
import arrowRight from '@/assets/arrow-left.svg'
// import lockIcon from '@/assets/lock.svg'
import type {ReactNode} from "react";

export default function SpecialCollection({children}: {children: ReactNode}) {
    return (
        <div className={styles.specialCollection}>
            <div className={styles.header}>
                <h1 className={styles.title}>Список вопросов</h1>
                <Button variant='secondary'>
                    Стать участником сообщества
                    <img src={arrowRight} alt='Become member'
                    style={{transform: 'rotate(180deg)'}}/>
                </Button>
            </div>
            <div className={styles.main}>
                {/*<img src={lockIcon} alt='Closed Collection' />*/}
                {/*<p>Список вопросов появится у участников сообщества</p>*/}
                {children}
            </div>
        </div>
    )
}