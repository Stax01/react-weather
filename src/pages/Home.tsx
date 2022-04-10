import React from 'react'
import { useCustomDispatch, useCustomSelector } from '../hooks/store'
import { fetchCurrentWeather, } from '../store/thunk/fetchCurrentWeather'
import Days from '../components/days/Days'
import ThisDay from '../components/thisDay/ThisDay'
import ThisDayInfo from '../components/thisDayInfo/ThisDayInfo'
import styles from './home.module.scss'

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
            <div className={styles.home}>
                {isLoading ? <div>Loading</div> : weather && <ThisDay weather={weather} />}
                {isLoading ? <div>Loading</div> : weather && <ThisDayInfo data={weather} />}
            </div>
            {isLoading ? <div>Loading</div> : weather && <Days />}
        </>
    )
}
