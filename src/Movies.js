import { useCustomContext } from './context'
import { Link } from 'react-router-dom'

const url = "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";
const Movies = () => {
    const {isLoading, movies} = useCustomContext();
    
     if (isLoading) {
    return <div className='loading'></div>
  }
 
    return (
         <section className='movies'>
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie

        return (
          <Link to={`/movie/${id}`}key={id} className='movie font-bold'>
            <article>
              <img src={poster === 'N/A' ? url : poster} alt={title} />
              <div className='movie-info'>
                <h4 className='title'>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
    )
}

export default Movies
