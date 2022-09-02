import {Movie} from './Movie'

export const Movies = (props) => {
    const {movies} = props

    return <div className="movies">
        {movies.map(movie => (
            <Movie 
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                imdb={movie.imdbID}
                type={movie.Type}
                poster={movie.Poster}
            />
        ))}
    </div>
}
