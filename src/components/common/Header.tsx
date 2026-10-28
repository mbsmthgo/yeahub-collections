import yeahubIcon from '@/assets/logo.svg'
import arrowDownIcon from '@/assets/arrow-down.svg'
import hamburgerMenuIcon from '@/assets/hamburger-menu.svg'
import styles from './Header.module.css'
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "@/hooks/useMediaQuery.ts";
import Button from "@/components/common/Button.tsx";

const tabs = ['База вопросов', 'Тренажёр', 'Материалы', 'Навыки (hh)']

export default function Header() {

    const navigate = useNavigate()
    const isTablet = useMediaQuery('(min-width: 576px) and (max-width: 1024px)')
    const isMobile = useMediaQuery('(max-width: 575px)')

    return (
        <header className={styles.header}>
            <div onClick={() => navigate('/')}
                 className={styles.header_logoGroup}>
                <img src={yeahubIcon} alt='Yeahub Logo' className={styles.logoGroup_logo}/>
                {!isMobile && (
                    <h2 className={styles.logoGroup_title}>Yeahub</h2>
                )}
            </div>
            {isTablet || isMobile ? (
                <div className={styles.header_dropdown}>
                    <p>Подготовка</p>
                    <img src={arrowDownIcon} alt='Arrow Down Icon'/>
                </div>) : (
                <nav className={styles.header_nav}>
                    {tabs.map(tab => <span key={tab} className={styles.nav_tab}>{tab}</span>)}
                </nav>
            )}
            {isTablet || isMobile ? (
                <button className={styles.hamburger_btn}>
                    <img src={hamburgerMenuIcon} alt='Hamburger Menu Icon'/>
                </button>
            ) : (
                <div className={styles.header_btnGroup}>
                    <Button variant='secondary'>Вход</Button>
                    <Button variant='primary'>Регистрация</Button>
                </div>
            )}
        </header>
    )
}