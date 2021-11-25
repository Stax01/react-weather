import { AxiosResponse } from "axios"
import api from "../axios"
import {  Data } from "../store/types"

interface ICoord {
    lat: number;
    lon: number
}

export const WeatherService = {
    async getCurrentWeather(city: string):Promise<AxiosResponse<Data>> {
        const data = await api.get<Data>(`/weather?q=${city},RU`)
        
        return data
    },
    async getCurrentWeatherSevensDays(payload:ICoord ) {
        const  data  = await api.get(`onecall?lat=${payload.lat}&lon=${payload.lon}&exclude={current,minutely,alerts}`)
        console.log(data)
        return data

    }
}