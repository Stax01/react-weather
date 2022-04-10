import React from 'react'
import { GlobalSvgSelector } from '../../assets/icon/global/globalSvgSelector'
import Popup from '../popup/Popup'
import { WeatherDaily } from '../../store/types'
import styles from './days.module.scss'


const DaysCard = (data: WeatherDaily) => {
    const main = (data.weather[0].main).toLowerCase()
    const [modal, setModal] = React.useState(false)

    return (
        <div
            className={styles.card}
            onClick={() => setModal(!modal)}
        >
            <Popup modal={modal} data={data} main={main} />
            <div className={styles.name}>{data.day}</div>
            <div className={styles.date}>{data.date} {data.montn}</div>
            <GlobalSvgSelector id={main} />
            <div className={styles.temp}>{Math.floor(data.temp.day)}° Днем</div>
            <div className={styles.temp_2}>{Math.floor(data.temp.night)}° Ночью</div>
            <div className={styles.weather}>{data.weather[0].description}</div>
        </div>
    )
}

export default DaysCard
