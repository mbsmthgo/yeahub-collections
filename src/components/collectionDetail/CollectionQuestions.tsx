import styles from './CollectionQuestions.module.css'
import {useCallback, useState} from "react";
import {fetchQuestions} from "@/api/questionsApi.ts";
import type {RequestOptions} from "@/api/apiClient.ts";
import {useFetch} from "@/hooks/useFetch.ts";
import QuestionItem from "./QuestionItem.tsx";
import Pagination from "@/components/common/Pagination.tsx";
import {getWordEnding} from "@/utils/getWordEnding.ts";
import {usePageChange} from "@/hooks/usePageChange.ts";

export default function CollectionQuestions({collectionId}: {collectionId: number}) {

    const {currentPage, handlePageChange} = usePageChange()

    const fetcher = useCallback((options: RequestOptions) => {
        return fetchQuestions({...options, params: {page: currentPage, collection: collectionId}})
    }, [currentPage, collectionId])
    const {data: questionsResponse, loading, error} = useFetch(fetcher)

    const [isOpen, setIsOpen] = useState<number[]>([])
    const handleQuestionToggle = useCallback((questionId: number) => {
        setIsOpen(prev => {
            return prev.includes(questionId) ? prev.filter(question => question !== questionId)
                : [...prev, questionId]
        })
    }, [])

    const questionsToShow = (questionsResponse?.total ?? 0) > 5 ? questionsResponse?.data.slice(0, 5) : questionsResponse?.data
    const restQuestions = (questionsResponse?.total ?? 0) > 5 ? (questionsResponse?.total ?? 5) - 5 : 0
    const questionForm = getWordEnding('вопрос', restQuestions)

    const totalPages = Math.ceil((questionsToShow?.length ?? 0) / 10) || 1 // Бессмыслица, но сделала так из-за плашки в дизайне

    return (
        <section className={styles.collectionQuestions}>
                <h1 className={styles.title}>Вопросы React, JavaScript</h1>
            {error ? <p className='error'>Что-то пошло не так... {error.message}</p> :
                loading ? <p>Загрузка...</p> : (
                    <>
                        <ul className={styles.questionsList}>
                            {questionsResponse?.data.length === 0 && <li style={{listStyle: 'none'}}>
                                К сожалению, По Вашему запросу ничего не найдено...
                            </li>}
                            {questionsToShow?.map(question => (
                                <QuestionItem key={question.id} question={question}
                                              isOpen={isOpen.includes(question.id)} onToggle={handleQuestionToggle}
                                />
                            ))}
                        </ul>
                        {restQuestions !== 0 && (
                            <div className={styles.notification}>
                                <p className={styles.notificationText}>Ещё {restQuestions} {questionForm} доступно зарегистрированным пользователям</p>
                                <button className={styles.notificationBtn}>Зарегистрироваться</button>
                            </div>
                        )}
                        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>
                    </>
                )}
        </section>
    )
}