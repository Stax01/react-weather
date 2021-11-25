import s from './thisDayInfo.module.scss'
import { ThisDayInfoItem } from './ThisDayInfoItem'
import cloud from './../../../../assets/images/cloud.png'
import { Data } from '../../../../store/types'
import { dirToStr } from '../../../../Utils/WindDeg';

interface Props {
    data: Data
}

const ThisDayInfo = ({ data }: Props) => {
    const weather = data.weather[0].description
   const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.floor(data.main.temp)}° ощущается как ${Math.floor(data.main.feels_like)}°`,
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${data.main.pressure} мм ртутного столба - нормальное`,
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: `${weather}`,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${dirToStr(data.wind.deg)} ${Math.floor(data.wind.speed)} м/с `,
        },
    ];

    return (
        <div className={s.this__day_info}>
            <ul className={s.this__day_info_items}>
                {items.map(item => <ThisDayInfoItem
                    key={item.icon_id}
                    icon={item.icon_id}
                    name={item.name}
                    desc={item.value} />)}
            </ul>
            <img
                className={s.this__day_info_cloud}
                src={cloud}
                alt="облако" />
        </div>
    )
}


export default ThisDayInfo


