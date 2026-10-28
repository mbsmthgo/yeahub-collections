import styles from './QuestionDetailPage.module.css'
import arrowBack from "@/assets/arrow-down-purple.svg";
import Button from "@/components/common/Button.tsx";
import {useNavigate, useParams} from "react-router-dom";
import QuestionHeaderCard from "@/components/collectionDetail/questionDetail/QuestionHeaderCard.tsx";
import QuestionNavigation from "@/components/collectionDetail/questionDetail/QuestionNavigation.tsx";
import ShortAnswerCard from "@/components/collectionDetail/questionDetail/ShortAnswerCard.tsx";
import DetailAnswerCard from "@/components/collectionDetail/questionDetail/DetailAnswerCard.tsx";
import GuruCard from "@/components/collectionDetail/GuruCard.tsx";
import {useMediaQuery} from "@/hooks/useMediaQuery.ts";
import QuestionTagsCard from "@/components/collectionDetail/questionDetail/QuestionTagsCard.tsx";
import {useCallback, useState} from "react";
import {fetchQuestionById} from "@/api/questionsApi.ts";
import type {RequestOptions} from "@/api/apiClient.ts";
import {useFetch} from "@/hooks/useFetch.ts";
import DOMPurify from "dompurify";

export default function QuestionDetailPage() {

    const navigate = useNavigate()
    const isTablet = useMediaQuery('(max-width: 1024px')

    const {collectionId, questionId} = useParams()
    const fetcher = useCallback((options: RequestOptions) => {
        return fetchQuestionById(questionId, options)
    }, [questionId])
    const {data: question, loading, error} = useFetch(fetcher)

    const [questionInfoOpen, setQuestionInfoOpen] = useState<boolean>(false)

    const cleanShortAnswer = DOMPurify.sanitize(question?.shortAnswer ?? '')
    const cleanLongAnswer = DOMPurify.sanitize(question?.longAnswer ?? '')

    return (
        <main className={styles.main_detailQuestion}>
            <Button variant='secondaryWithDecoration'
                    onClick={() => navigate(`/collections/${collectionId}`)}>
                <img src={arrowBack} alt='Back to collection'
                     style={{transform: 'rotate(90deg)'}}/>
                Назад
            </Button>
            {error ? <p className='error'>Что-то пошло не так... {error.message}</p> :
                loading ? <p>Загрузка...</p> :
                    (
                        <div className={styles.columnsContainer}>
                            <div className={styles.leftColumn}>
                                <QuestionHeaderCard title={question?.title} description={question?.description}
                                                    setInfoOpen={setQuestionInfoOpen}
                                />
                                <QuestionNavigation />
                                <ShortAnswerCard shortAnswer={cleanShortAnswer}
                                />
                                <DetailAnswerCard longAnswer={cleanLongAnswer}
                                />
                                {isTablet && <GuruCard />}
                            </div>
                            <div className={styles.rightColumn}>
                                <QuestionTagsCard complexity={question?.complexity} rate={question?.rate}
                                                  skills={question?.questionSkills} keywords={question?.keywords}
                                                  author={question?.createdBy?.username}
                                                  infoOpen={questionInfoOpen} setInfoOpen={setQuestionInfoOpen}
                                />
                                {!isTablet && <GuruCard/>}
                            </div>
                        </div>
                    )}
        </main>
    )
}