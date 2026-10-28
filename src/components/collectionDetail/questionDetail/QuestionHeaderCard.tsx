import styles from './QuestionHeaderCard.module.css'
import figmaImage from '@/assets/figma-backup.svg'
import questionInfoIcon from '@/assets/question-info.svg'
import {useMediaQuery} from "@/hooks/useMediaQuery.ts";

interface QuestionHeaderCardProps {
    title: string | undefined
    description: string | undefined
    setInfoOpen: (value: (prev: boolean) => boolean) => void
}

export default function QuestionHeaderCard({title, description, setInfoOpen}: QuestionHeaderCardProps) {

    const isMobile = useMediaQuery('(max-width: 575px)');

    return (
        <div className={styles.questionHeaderCard}>
            <img className={styles.questionImage} src={figmaImage} alt='Figma Image'/>
            <div className={styles.questionAboutContainer}>
                <div className={styles.titleBtnContainer}>
                    <h2 className={styles.title}>{title}</h2>
                    {isMobile && (<button onClick={() => setInfoOpen(prev => !prev)}
                                          className={styles.questionTagsBtn}>
                        <img src={questionInfoIcon} alt='Open Question Tags'/>
                    </button>)}
                </div>
                <p className={styles.description}>{description}</p>
            </div>
            {!isMobile && (<button onClick={() => setInfoOpen(prev => !prev)}
                                   className={styles.questionTagsBtn}>
                <img src={questionInfoIcon} alt='Open Question Tags'/>
            </button>)}
        </div>
    )
}