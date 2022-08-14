import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='mt-3 col-3'>
    <div className='card border-0'>
      <img src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`} alt="movie image" className='w-100 rounded'/>
      <div className='card-body'>
        <h5>{movie.original_title}</h5>
      </div>
    </div>
  </div>
  )
}

export default MovieCard