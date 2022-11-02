import {configureStore} from '@reduxjs/toolkit'
import BannerReducer from './reducers/BannerReducer'
import CinemaReducer from './reducers/CinemaReducer'
import MovieReducer from './reducers/MovieReducer'

export const store = configureStore({
    reducer: {
        BannerReducer:BannerReducer,
        MovieReducer:MovieReducer,
        CinemaReducer:CinemaReducer
    }
})