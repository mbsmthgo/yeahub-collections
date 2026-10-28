import {createBrowserRouter} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.tsx";
import CollectionsPage from "@/pages/CollectionsPage.tsx";
import CollectionDetailPage from "@/pages/CollectionDetailPage.tsx";
import QuestionDetailPage from "@/pages/QuestionDetailPage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <CollectionsPage/>
            },
            {
                path: 'collections/:collectionId',
                element: <CollectionDetailPage/>
            },
            {
                path: 'collections/:collectionId/questions/:questionId',
                element: <QuestionDetailPage/>
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
])