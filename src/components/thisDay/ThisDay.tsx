import { GlobalSvgSelector } from '../../assets/icon/global/globalSvgSelector'
import { Data } from '../../store/types'
import styles from './thisDay.module.scss'
interface Props {
    weather: Data
}

const ThisDay = ({ weather }: Props) => {
    const time = new Date().toLocaleTimeString().slice(0, -3)
    const weatherIcon = weather.weather[0].main.toLowerCase()
    
    return (
        <div className={styles.this__day}>
            <div className={styles.top__block}>
                <div className={styles.top__block_wrapper}>
                    <div className={styles.this__temp}>{Math.floor(weather.main.temp)}°</div>
                    <div className={styles.this__day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id={weatherIcon} />
            </div>
            <div className={styles.bottom__block}>
                <div className={styles.this__time}>Время: <span>{time}</span></div>
                <div className={styles.this__city}>Город: <span>{weather.name}</span></div>
            </div>
        </div>
    )
}

export default ThisDay
