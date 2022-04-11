import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Coord } from "../../api/WeatherApi";
import { fetchCurrentWeather } from "../thunk/fetchCurrentWeather";
import { Data } from "../types"


type CurrentWeather = {
    weather?: Data;
    isLoading: boolean;
    response: Response;
    city: string;
    error: string
    coord?: Coord
}

type Response = {
    status: number,
    message: string
}

const initialState: CurrentWeather = {
    city: localStorage.getItem('city') || 'Москва',
    weather: undefined,
    isLoading: false,
    response: {
        status: 0,
        message: ''
    },
    coord: undefined,
    error: ''
}

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        addCurrentCity(
            state,
            action
        ) {
            state.city = action.payload
        },
    },
    extraReducers: {
        [fetchCurrentWeather.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = ''
            state.weather = action.payload.data;

        },
        [fetchCurrentWeather.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCurrentWeather.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

    }
})

export default currentWeatherSlice.reducer;


