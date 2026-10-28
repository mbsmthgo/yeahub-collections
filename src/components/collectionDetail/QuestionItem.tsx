import styles from './QuestionItem.module.css'
import arrowDownUpIcon from '@/assets/arrow-down-purple.svg'
import popoverIcon from '@/assets/popover.svg'
import arrowRightIcon from '@/assets/arrow-left.svg'
import {Link} from 'react-router-dom'
import type {Question} from "@/types/question.ts";
import {useRef, useState} from "react";
import DOMPurify from 'dompurify'

interface QuestionItemProps {
    isOpen: boolean
    onToggle: (questionId: number) => void
    question: Question
}

export default function QuestionItem({isOpen, onToggle, question}: QuestionItemProps) {

    const [showPopover, setShowPopover] = useState<boolean>(false)
    const popoverRef = useRef<HTMLDivElement | null>(null)

    const cleanShortAnswer = DOMPurify.sanitize(question?.shortAnswer ?? '')

    return (
        <li className={styles.questionContainer}>
            <div onClick={() => onToggle(question.id)}
                 className={styles.questionWrapper}>
                <span className={styles.question}>{question.title}</span>
                <button className={styles.questionBtn}>
                    <img style={{transform: `${isOpen ? 'rotate(180deg)' : 'none'}`}}
                        src={arrowDownUpIcon} alt='Show Answer'
                    />
                </button>
            </div>
            {isOpen && (
                <div className={styles.questionBody}>
                    <div className={styles.badgesButton_container}>
                        <div className={styles.badges}>
                                        <span className={styles.badge}>Рейтинг: <span
                                            className={styles.badgeIcon}>
                                            {question.rate}</span></span>
                            <span className={styles.badge}>Сложность: <span className={styles.badgeIcon}>
                                            {question.complexity}</span></span>
                        </div>
                        <div className={styles.moreBtn_container}>
                            <button onClick={() => setShowPopover(prev => !prev)}
                                className={styles.moreBtn}>
                                <img src={popoverIcon} alt='More Information'/>
                            </button>
                            {showPopover && (
                                <div className={styles.popover} ref={popoverRef}>
                                    <Link to={`questions/${question.id}`}
                                          className={styles.popover_moreBtn}>Подробнее</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.answer}
                         dangerouslySetInnerHTML={{__html: `<p>${cleanShortAnswer}</p>`}}/>
                    <Link to={`questions/${question.id}`}
                          className={styles.moreBtn_mobile}>
                        Подробнее
                        <img style={{transform: 'rotate(180deg)'}}
                             src={arrowRightIcon} alt='More Information'/>
                    </Link>
                </div>
            )}
        </li>
    )
}