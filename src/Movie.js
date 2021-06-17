import React from 'react';
import { useParams,Link } from 'react-router-dom';
import useFetch from './useFetch';
// import PropTypes from 'prop-types';

const Movie = () => {
    const {id} = useParams();
    const {isLoading,data: movie,error}  = useFetch(`?i=${id}`);
    console.log(movie,error);
    // console.count(useFetch(`?i=${id}`))
    // console.count(useFetch())
    // console.log(movie.Title);
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
      </div>)
    
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie; console.log(poster)

 return (
         <section className=' single-movie'>
      <img src={poster} alt={title}/>
      <div className='single-movie-info'>
        <h2 className="to-gray-800 font-bold text-4xl text-center">{title}</h2>
        <p className="text-gray-600 text-xl">{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn hover:bg-blue-600'>
          back to movies
        </Link>
      </div>
    </section>
    )
 }
 
 export default Movie;