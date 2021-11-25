import { lowerCase } from 'lodash'
import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icon/global/globalSvgSelector'
import Popup from '../../../../components/popup/Popup'
import { WeatherDaily } from '../../../../store/types'
import s from './days.module.scss'


const DaysCard = (data: WeatherDaily) => {
    const main = lowerCase(data.weather[0].main)
    const [modal, setModal] = React.useState(false)

    return (
        <div
            className={s.card}
            onClick={() => setModal(!modal)}
        >
            <Popup modal={modal} data={data} main={main} />
            <div className={s.name}>{data.day}</div>
            <div className={s.date}>{data.date} {data.montn}</div>
            <GlobalSvgSelector id={main} />
            <div className={s.temp}>{Math.floor(data.temp.day)}° Днем</div>
            <div className={s.temp_2}>{Math.floor(data.temp.night)}° Ночью</div>
            <div className={s.weather}>{data.weather[0].description}</div>
        </div>
    )
}

export default DaysCard
