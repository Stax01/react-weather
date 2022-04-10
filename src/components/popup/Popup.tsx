import React from 'react'
import { GlobalSvgSelector } from '../../assets/icon/global/globalSvgSelector'
import { ThisDayInfoItem } from '../thisDayInfo/ThisDayInfoItem';

import { WeatherDaily } from '../../store/types';
import { dirToStr } from '../../Utils/WindDeg';
import styles from './popup.module.scss'
interface Props {
    modal: boolean;
    data: WeatherDaily
    main: string
}

const Popup = ({ modal, data, main }: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.floor(data.temp.day)}° ощущается как ${Math.floor(data.feels_like.day)}°`,
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${data.pressure} мм ртутного столба - нормальное`,
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: `${data.weather[0].description}`,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${Math.floor(data.wind_speed)} м/с ${dirToStr(data.wind_deg)}  `,
        },
    ];

    if (!modal)
        return null;

    return (
        <div className={styles.modal}>
            <div className={styles.popup}>
                <div className={styles.day}>
                    <div className={styles.day__temp}>{Math.floor(data.temp.day)}°</div>
                    <div className={styles.day__name}>{data.day}</div>
                    <div className={styles.img}>
                        <GlobalSvgSelector id={main} />
                    </div>
                    <div className={styles.day__city}>
                        Город: <span>Санкт-Петербург</span>
                    </div>
                </div>
                <div className={styles.this__day_info_items}>
                    {items.map(items => <ThisDayInfoItem icon={items.icon_id} name={items.name} desc={items.value} />)}
                </div>
                <div className={styles.close}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </div>
    );
};

export default Popup
