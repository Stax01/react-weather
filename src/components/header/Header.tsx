import React from 'react'
import { GlobalSvgSelector } from '../../assets/icon/global/globalSvgSelector'
import { cityDB } from '../../cityDB'
import { Theme } from '../../context/ThemeContext'
import { useCustomDispatch } from '../../hooks/store'
import { currentWeatherSlice } from '../../store/slices/currentWeatherSlice'
import { useCity } from '../../Utils/useCity'
import { useTheme } from '../../hooks/useTheme'
import Select, { ISelectOption } from '..'
import styles from './header.module.scss'


export const Header = () => {
    const theme = useTheme()
    const dispatch = useCustomDispatch()
    const city = useCity(cityDB)

    const [isSelectedOption, setIsSelectedOption] = React.useState(false)
    const [selectedOption, setSelectedOption] = React.useState<ISelectOption[]>(localStorage.getItem('city') || city[0])
    const customStyles = {

        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '230px',
            height: '37px',
            borderRadius: '10px',
            cursor: "pointer",
            color: '#fff'

        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? "#fff" : '#000'
        })
    }

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    const handleFocus = () => {
        setIsSelectedOption(true)
    }
    const handleBlur = () => {
        setIsSelectedOption(false)
    }

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption)
        const data: any = Object.values(selectedOption)[0]
        localStorage.setItem('city', data)
        dispatch(currentWeatherSlice.actions.addCurrentCity(data))
    };

    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <GlobalSvgSelector id='header-logo' />
                </div>
                <div className={styles.title}>React weather</div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.changeTheme} onClick={changeTheme}>
                    <GlobalSvgSelector id='change-theme' />
                </div>
                <Select
                    styles={customStyles}
                    value={selectedOption}
                    onChange={handleChange}
                    options={city}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
        </div>
    )
}


