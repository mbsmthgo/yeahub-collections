import styles from './QuestionTagsCard.module.css'
import closeIcon from '@/assets/close.svg'
import figmaMiniIcon from '@/assets/figma-backup-miniIcon.svg'
import type {Skill} from "@/types/common.ts";
import FilterBadge from "@/components/common/FilterBadge.tsx";

interface QuestionTagsCardProps {
    infoOpen: boolean
    setInfoOpen: (value: boolean) => void
    complexity: number | undefined
    rate: number | undefined
    skills: Skill[] | undefined
    keywords: string[] | undefined
    author: string | undefined
}

export default function QuestionTagsCard({infoOpen, setInfoOpen,
                                         complexity, rate, skills,
                                         keywords, author}: QuestionTagsCardProps) {
    return (
        <div className={`${styles.questionTagsCard} ${infoOpen ? styles.questionTagsCard_open : ''}`}>
            <div className={styles.questionTagContainer}>
                {infoOpen && <button className={styles.closeBtn}
                                     onClick={() => setInfoOpen(false)}>
                    <img src={closeIcon} alt='Close Question Tags'/>
                </button>}
                <p className={styles.title}>Уровень:</p>
                <div className={styles.badges}>
                <span className={styles.badge}>
                Сложность: <span className={styles.badgeIcon}>{complexity}</span>
                </span>
                    <span className={styles.badge}>
                Рейтинг: <span className={styles.badgeIcon}>{rate}</span>
                </span>
                </div>
            </div>
            <div className={styles.questionTagContainer}>
                <p className={styles.title}>Навыки:</p>
                <div className={styles.filterBadges}>
                    {skills?.map(skill => (
                        <FilterBadge variant='active'
                            key={skill.id}>
                            <img src={figmaMiniIcon} alt='Figma Icon'/>
                            {skill.title}
                    </FilterBadge>
                    ))}
                </div>
            </div>
            <div className={styles.questionTagContainer}>
                <p className={styles.title}>Ключевые слова:</p>
                <div className={styles.filterBadges}>
                    {keywords?.map(keyword => (
                        <span key={keyword}
                              className={styles.tag}>#{keyword}</span>
                    ))}
                </div>
            </div>
            <p className={styles.authorString}>
                Автор: <span className={styles.author}>{author}</span>
            </p>
        </div>
    )
}