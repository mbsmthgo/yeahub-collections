import styles from './NotFoundPage.module.css'
import Button from "@/components/common/Button.tsx";
import {useNavigate} from "react-router-dom";

export default function NotFoundPage() {

    const navigate = useNavigate()

    return (
        <div className={styles.notFoundPage}>
            <h1 className={styles.title}>Страница не найдена</h1>
            <Button onClick={() => navigate('/', {replace: true})}>Вернуться на главную</Button>
        </div>
    )
}