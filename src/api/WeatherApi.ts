import { AxiosResponse } from "axios"
import api from "."
import {  Data } from "../store/types"

export type Coord = {
    lat: number;
    lon: number
}

export const WeatherApi = {
    async getCurrentWeather(city: string):Promise<AxiosResponse<Data>> {
        const data = await api.get<Data>(`/weather?q=${city},RU`)
        return data
    },
    async getCurrentWeatherSevensDays(payload:Coord ) {
        const  data  = await api.get(`onecall?lat=${payload.lat}&lon=${payload.lon}&exclude={current,minutely,alerts}`)
        return data

    },
    async getCurrentWeathersDays(payload:Coord ) {
        const  data  = await api.get(`onecall?lat=${payload.lat}&lon=${payload.lon}&exclude={current,minutely,alerts}`)
        return data

    }
}