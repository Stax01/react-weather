import IndicatorSvgSelector from '../../assets/icon/indicators/IndicatorSvgSelector'
import styles from './thisDayInfo.module.scss'

interface ThisDayInfoItemProps {
    name: string,
    desc: string,
    icon: string
}

export const ThisDayInfoItem: React.FC<ThisDayInfoItemProps> = ({ name, desc, icon }) => {
    return (
        <li className={styles.item}>
            <div className={styles.item__icon}>
                <IndicatorSvgSelector id={icon} />
            </div>
            <div className={styles.item__key}>{name} </div>
            <span className={styles.item__value}>{desc}</span>
        </li>
    )
}
