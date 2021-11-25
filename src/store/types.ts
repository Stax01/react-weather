export type Data = {
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
    }
    coord: any
    weather: Weather;
    wind: {
        speed: number;
        deg: number
    };
    name: string
}

export type Weather = [{
    main: string;
    description: string
}]

export type WeatherSevenDays = {
    daily: WeatherDaily[]
    timezone_offset: number;
    response: Response;
    isLoading: boolean
}

export type WeatherDaily = {
    day: string;
    date: number;
    montn: string
    feels_like: {
        day: number;
        night: number
    },
    dt: number
    weather: Weather;
    wind_speed: number;
    pressure: number
    temp:{
        day: number;
        night: number
    }
    wind_deg:number
}

