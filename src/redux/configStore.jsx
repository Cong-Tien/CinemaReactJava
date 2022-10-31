import {configureStore} from '@reduxjs/toolkit'
import BannerReducer from './reducers/BannerReducer'
import MovieReducer from './reducers/MovieReducer'

export const store = configureStore({
    reducer: {
        BannerReducer:BannerReducer,
        MovieReducer:MovieReducer
    }
})