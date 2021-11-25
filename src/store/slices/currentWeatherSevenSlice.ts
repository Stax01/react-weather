import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { WeatherDaily, WeatherSevenDays } from "../types";

export interface WeatherSevenState {
    isLoading: boolean;
    data: {
        daily: WeatherDaily[]
        timezone_offset: number;

    } | null;
    response: {
        status: number;
        message: string
    };
}


const initialState: WeatherSevenState = {
    isLoading: false,
    data: null,
    response: {
        status: 0,
        message: ''
    },
}

export const currentWeatherSevenSlice = createSlice({
    name: 'current_weather_seven_days',
    initialState,
    reducers: {
        fetchCurrentWeatherSeven(state) {
            state.isLoading = true
        },
        fetchCurrentWeatherSevenSuccess(
            state,
            action: PayloadAction<AxiosResponse<WeatherSevenDays>>
        ) {
            state.isLoading = false;
            state.data = action.payload.data;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchCurrentWeatherSevenError(
            state,
            action: PayloadAction<AxiosResponse>
        ) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        }
    }
})


export default currentWeatherSevenSlice.reducer