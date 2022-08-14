import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movieList}) => {
  return (
    <div className='row'>
        {
          movieList.map((item,index) => 
            <MovieCard key={index} movie={item}/>
          )
        }
    </div>
  )
}

export default MovieList