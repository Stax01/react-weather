import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSevenSlice from "./slices/currentWeatherSevenSlice";
import currentWeatherSlice from "./slices/currentWeatherSlice";

const rootReducer = combineReducers({
    currentWeatherSlice,
    currentWeatherSevenSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']