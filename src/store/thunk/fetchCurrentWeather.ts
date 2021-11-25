import { WeatherService } from "../../services/WeatherService";
import { currentWeatherSevenSlice } from "../slices/currentWeatherSevenSlice";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherService.getCurrentWeather(payload)
        if (res.status === 200) {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
        } else {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
        }
    } catch (error) {
        console.log(error)
    }
}


export const fetchCurrentWeatherSeven = (paylod: { lat: number, lon: number }) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSevenSlice.actions.fetchCurrentWeatherSeven)
        const res = await WeatherService.getCurrentWeatherSevensDays(paylod)
        if (res.status === 200) {
            dispatch(currentWeatherSevenSlice.actions.fetchCurrentWeatherSevenSuccess(res))
            console.log(res)
        } else {
            dispatch(currentWeatherSevenSlice.actions.fetchCurrentWeatherSevenError(res))
        }
    } catch (error) {
        console.log(error)
    }
}