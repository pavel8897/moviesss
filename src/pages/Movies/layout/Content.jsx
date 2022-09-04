import React, {useState, useEffect} from 'react'
import {Movies} from './../components/Movies'
import {Preloader} from './../components/Preloader'
import {Search} from './../components/Search'
//https://www.omdbapi.com/?apikey=85b668c0&s=movies

export const Content = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        fetch('https://www.omdbapi.com/?apikey=85b668c0&s=anime')
            .then(response => response.json())
            .then(data => setMovies(data.Search))
    }, [])
    
    const searchMovies = (str, type='all') => {
        fetch(`https://www.omdbapi.com/?apikey=85b668c0&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => setMovies(data.Search))
    }
    
    return <main className="container content">
        <Search searchMovies={searchMovies} />
        {
            movies.length ? (
                <Movies movies={movies} />
            ) :
                <Preloader />            
        }
    </main>
}
