import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCurrentWeather, fetchCurrentWeatherSeven } from "../thunk/fetchCurrentWeather";
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
    reducers: {},
    extraReducers: {
        [fetchCurrentWeatherSeven.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data;
        },
        [fetchCurrentWeather.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCurrentWeather.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            
        },

    }
})


export default currentWeatherSevenSlice.reducer