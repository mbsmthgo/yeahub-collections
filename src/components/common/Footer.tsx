import styles from './Footer.module.css'
import figmaIcon from '@/assets/figma.svg'
import tgIcon from '@/assets/tg.svg'
import youtubeIcon from '@/assets/youtube.svg'
import ttIcon from '@/assets/tt.svg'
import gitIcon from '@/assets/git.svg'

const media = [
    {
        id: 1,
        name: 'Figma',
        icon: figmaIcon
    },
    {
        id: 2,
        name: 'Telegram',
        icon: tgIcon
    },
    {
        id: 3,
        name: 'Youtube',
        icon: youtubeIcon
    },
    {
        id: 4,
        name: 'TikTok',
        icon: ttIcon
    },
    {
        id: 5,
        name: 'Github',
        icon: gitIcon
    }
]

export default function Footer() {
    return (
        <div className={styles.footer}>
            <h2>Yeahub</h2>
            <div className={styles.footer_extra}>
                <p>Выбери, каким будет IT завтра, вместе c нами</p>
                <p className={styles.footer_about}>YeaHub — это полностью открытый проект, призванный объединить и улучшить
                    IT-сферу. Наш исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
                    ознакомления в Figma.</p>
            </div>
            <div className={styles.footer_contacts}>
                <p>© 2024 YeaHub Документы</p>
                <div className={styles.footer_media}>
                    <p>Ищите нас и в других соцсетях @yeahub_it</p>
                    {media.map(item => <img className={styles.footer_mediaItem} key={item.id} src={item.icon}
                                            alt={`${item.name} Icon`}/>)}
                </div>
            </div>
        </div>
    )
}