import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        'lang': 'ru'
    }
})

api.interceptors.request.use(config => {
    config.url =
        config.url + '&units=metric&appid=0d5efa9138924425e9323f7f037ec23d';
    return config
})

export default api