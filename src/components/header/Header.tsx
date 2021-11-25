import React from 'react'
import { GlobalSvgSelector } from '../../assets/icon/global/globalSvgSelector'
import { Theme } from '../../context/ThemeContext'
import { useCustomDispatch } from '../../hooks/store'
import { currentWeatherSlice } from '../../store/slices/currentWeatherSlice'
import { useTheme } from './../../hooks/useTheme'
import Select, { ISelectOption } from './components'
import s from './header.module.scss'



export const Header = () => {

    const options: ISelectOption[] = [
        { value: '1', label: 'Санкт-Петербург' },
        { value: '2', label: 'Москва' },
        { value: '3', label: 'Уфа' },
        { value: '4', label: 'Ростов-на-дону' },
        { value: '5', label: 'Тверь' },
    ]

    const theme = useTheme()
    const dispatch = useCustomDispatch()

    const [isSelectedOption, setIsSelectedOption] = React.useState(false)
    const [selectedOption, setSelectedOption] = React.useState<ISelectOption>(options[0])

    const customStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            borderRadius: '10px',
            cursor: "pointer",
            
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
    console.log(isSelectedOption)

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption)
        const data = Object.values(selectedOption)[1]
        dispatch(currentWeatherSlice.actions.addCurrentCity(data))
    };




    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id='header-logo' />
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.changeTheme} onClick={changeTheme}>
                    <GlobalSvgSelector id='change-theme' />
                </div>
                <Select
                    styles={customStyles}
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
        </div>
    )
}


