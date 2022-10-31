import React from 'react'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import CinemaSystem from './CinemaSystem'
import Movie from './Movie'

export default function Home() {
    return (
        <>
            <HomeCarousel />
            <Movie/>
            <CinemaSystem />
        </>
    )
}
