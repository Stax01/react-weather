import React from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { fetchCurrentWeather } from '../../store/thunk/fetchCurrentWeather'
import Days from './compontents/days/Days'
import ThisDay from './compontents/thisDay/ThisDay'
import ThisDayInfo from './compontents/thisDayInfo/ThisDayInfo'
import s from './home.module.scss'

export const Home = () => {
    const isLoading = useCustomSelector(state => state.currentWeatherSlice.isLoading)
    const weather = useCustomSelector(state => state.currentWeatherSlice.weather)

    const dispatch = useCustomDispatch()
    const city = useCustomSelector(state => state.currentWeatherSlice.city)
    React.useEffect(() => {
        dispatch(fetchCurrentWeather(city))
    }, [city, dispatch])

    return (
        <>
            <div className={s.home}>
                {isLoading ? <div>Loading</div> : weather && <ThisDay weather={weather} />}
                {isLoading ? <div>Loading</div> : weather && <ThisDayInfo data={weather} />}
            </div>
            {isLoading ? <div>Loading</div> : weather && <Days/>}
        </>
    )
}
