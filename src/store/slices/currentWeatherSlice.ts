import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"

import { Data } from "../types"


type CurrentWeather = {
    weather?: Data;
    isLoading: boolean;
    response: Response;
    city: string
}

type Response = {
    status: number,
    message: string
}

const initialState:CurrentWeather = {
    city: '' || 'Санкт-Петербург',
    weather:undefined,
    isLoading: false,
    response: {
        status: 0,
        message: ''
    }
}

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true
        },
        addCurrentCity(
            state,
            action
        ) {
            state.city = action.payload
        },
        fetchCurrentWeatherSuccess(
            state,
            action: PayloadAction<AxiosResponse<Data>>
        ) {
            state.isLoading = false;
            state.weather = action.payload.data;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchCurrentWeatherError(
            state,
            action: PayloadAction<AxiosResponse<Data>>
        ) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
    }
})

export default currentWeatherSlice.reducer;