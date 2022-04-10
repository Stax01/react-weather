import { createAsyncThunk } from "@reduxjs/toolkit";
import { Coord, WeatherApi } from "../../api/WeatherApi";


export const fetchCurrentWeather = createAsyncThunk(
    'current_weather/fetching',
    async(payload: string) => {
        try {
            const res = await WeatherApi.getCurrentWeather(payload)
           return res   
        } catch (error) {
            console.log(error)
        } 
    }
)
export const fetchCurrentWeatherSeven = createAsyncThunk(
    'current_weather_seven_days/fetching',
    async(payload:Coord)=> {
        try {
            const data = await WeatherApi.getCurrentWeatherSevensDays(payload)

            return data
        } catch (error) {
            console.log(error)
        }
    }
)

