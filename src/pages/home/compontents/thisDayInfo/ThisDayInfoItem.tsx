import IndicatorSvgSelector from '../../../../assets/icon/indicators/IndicatorSvgSelector'
import s from './thisDayInfo.module.scss'
interface Props {
    name: string,
    desc: string,
    icon: string
}

export const ThisDayInfoItem = ({ name, desc, icon }: Props) => {
    return (
        <li className={s.item}>
            <div className={s.item__icon}>
                <IndicatorSvgSelector id={icon} />
            </div>
            <div className={s.item__key}>{name} </div>
            <span className={s.item__value}>{desc}</span>
        </li>

    )
}
