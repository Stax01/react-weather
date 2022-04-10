import React from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { fetchCurrentWeatherSeven } from '../../store/thunk/fetchCurrentWeather'
import { getNextSevenDate, getNextSevenDays, getNextSevenMonth } from '../../Utils/dateUtils'
import styles from './days.module.scss'
import DaysCard from './DaysCard'


const Days = () => {
    const [category, setCatrgory] = React.useState(0)
    const date = getNextSevenDate()
    const days = getNextSevenDays()
    const montn = getNextSevenMonth()
    const dispatch = useCustomDispatch()

    const weatherSevenDays = useCustomSelector(state => state.currentWeatherSevenSlice.data?.daily)?.slice(0, 7)
    const isLoading = useCustomSelector(state => state.currentWeatherSevenSlice.isLoading)

    const item = weatherSevenDays?.map((item, index) => ({
        ...item,
        day: days[index],
        date: date[index],
        montn: montn[index]
    }))
    const coord = useCustomSelector(state => state.currentWeatherSlice.weather?.coord)

    React.useEffect(() => {
        if (coord) {
            (async () => {
                await dispatch(fetchCurrentWeatherSeven(coord))
            })()
        }
    }, [coord, dispatch])

    return (
        <div className={styles.days}>
            <div className={styles.days__tabs_top}>
                <div className={styles.wrapper}>
                    <button
                        className={category === 0 ? styles.tabs__top_btn_active : styles.tabs__top_btn}
                        onClick={() => setCatrgory(0)}
                    >На неделю</button>
                    <button
                        className={category === 1 ? styles.tabs__top_btn_active : styles.tabs__top_btn}
                        onClick={() => setCatrgory(1)}
                    >На месяц</button>
                   
                </div>
                <button
                    onClick={() => setCatrgory(0)}
                    className={styles.tabs__top_btn_close}
                >Отменить </button>
            </div>
            <div className={styles.days__tabs_content}>
                {isLoading
                    ? <>Loading...</>
                    : (category === 0)
                        ? (item && item.map(data =>
                            <DaysCard
                                key={data.dt}
                                {...data}
                            />))
                        : <div>На 30 дней нужна платная подписка :(</div>
                }
            </div>
        </div>
    )
}
export default Days


