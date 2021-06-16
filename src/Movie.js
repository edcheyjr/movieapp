import React from 'react';
import { Link , useParams } from 'react-router-dom';
import useFetch from './useFetch';

const Movie = () => {
    const {id} = useParams();
    const {isLoading, movie, error}  = useFetch(`?i=${id}`);
    // while loading
     if (isLoading) {
    return <div className='loading'></div>
  }
  //while theirs error
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  }
   const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
    return (
         <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
    )
}
export default Movie;


