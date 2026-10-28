import styles from './CollectionDetailPage.module.css'
import CollectionBanner from "@/components/collectionDetail/CollectionBanner.tsx";
import Button from "@/components/common/Button.tsx";
import {useNavigate, useParams} from "react-router-dom";
import arrowBack from '@/assets/arrow-down-purple.svg'
import {useCallback, useState} from "react";
import {fetchCollectionById} from "@/api/collectionsApi.ts";
import type {RequestOptions} from "@/api/apiClient.ts";
import {useFetch} from "@/hooks/useFetch.ts";
import CollectionQuestions from "@/components/collectionDetail/CollectionQuestions.tsx";
import CollectionSidebar from "@/components/collectionDetail/CollectionSidebar.tsx";
import GuruCard from "@/components/collectionDetail/GuruCard.tsx";
import {useMediaQuery} from "@/hooks/useMediaQuery.ts";
import SpecialCollection from "@/components/collectionDetail/SpecialCollection.tsx";
import lockIcon from '@/assets/lock.svg'
import clockIcon from '@/assets/clock.svg'

export default function CollectionDetailPage() {

    const navigate = useNavigate()
    const {collectionId} = useParams()

    const fetcher = useCallback((options: RequestOptions) => {
        return fetchCollectionById(collectionId, options)
    }, [collectionId])
    const {data: collection, loading, error} = useFetch(fetcher)

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

    const isTablet = useMediaQuery('(max-width: 1024px')

    return (
        <main className={styles.main_detailCollection}>
            <Button variant='secondaryWithDecoration'
                    onClick={() => navigate('/')}>
                <img src={arrowBack} alt='Back to collections'
                     style={{transform: 'rotate(90deg)'}}/>
                Назад
            </Button>
            {loading ? <p>Загрузка...</p> : error ? <p className='error'>Что-то пошло не так... {error.message}</p> : (
                <div className={styles.main_cardsContainer}>
                    <div className={styles.main_leftContainer}>
                        <CollectionBanner title={collection?.title} description={collection?.description}
                        setSidebarOpen={setSidebarOpen}/>
                        {collection?.isFree && collection?.questionsCount > 0 ? <CollectionQuestions collectionId={collection?.id}/> :
                            collection?.questionsCount === 0 ? (
                                    <SpecialCollection>
                                        <img src={clockIcon} alt='No Questions Available Yet'/>
                                        <p>Вопросы для данной коллекции скоро появятся</p>
                                    </SpecialCollection>
                                ) :
                                (
                                <SpecialCollection>
                                    <img src={lockIcon} alt='Closed Collection' />
                                    <p>Список вопросов появится у участников сообщества</p>
                                </SpecialCollection>
                            )}
                        {isTablet && <GuruCard/>}
                    </div>
                    <div className={styles.main_rightContainer}>
                        <CollectionSidebar title={collection?.title}
                                           specializations={collection?.specializations}
                                           isFree={collection?.isFree} company={collection?.company}
                                           author={collection?.createdBy} questionsCount={collection?.questionsCount}
                                           keywords={collection?.keywords}
                                           sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                        {!isTablet && <GuruCard/>}
                    </div>
                </div>
            )}
        </main>
    )
}