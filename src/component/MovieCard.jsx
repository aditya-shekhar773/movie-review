import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { useState } from 'react'


const MovieCard = ({ movie }) => {

  const [dopen, setDopen] = useState(false)

  const handleClose = () => {
    setDopen(false)

  }

  const handleOpen = () =>{
    setDopen(true)
  }
  return (
    <>
      <div className='mt-3 col-3' onClick={handleOpen}>
        <div className='card border-0'>
          <img src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`} alt="movie image" className='w-100 rounded' />
          <div className='card-body'>
            <h5>{movie.original_title}</h5>
          </div>
        </div>
      </div>

      <Dialog open={dopen} onClose={handleClose}>
        <DialogTitle className='justify-center text-center'> <span className=' before:-inset-1 before:absolute before:block relative inline-block before:bg-orange-500 before:-skew-y-3'><span className='text-gray-100 font-semibold relative'>FAVOURITE</span></span> ALL THE TIME</DialogTitle>
        <DialogContent>
          <div className=" ">
            <div className="  m-auto" style={{ width: "260px", height: "200px" }} >
              <img src={`https://www.themoviedb.org/t/p/w500/${movie.backdrop_path}`} width="100%" className="object-cover h-60 mt-3 rounded-lg" alt={movie.original_title} />
            </div>
            <div className="flex flex-col text-center mt-12">
              <h4 className=' font-semibold text-xl text-gray-700 hover:text-xl hover:text-gray-900 text-center px-3 py-1' >Name:- <span className='text-orange-700 hover:text-oreange-600'>{movie.title}</span></h4>
            <h5 className='font-semibold text-lg text-gray-600  hover:text-gray-500'>Release_date:-<span className='text-green-700 hover:text-green-600'>{movie.release_date }</span></h5>
            <h5 className='font-semibold text-lg text-gray-600  hover:text-gray-500'>Language :- <span className='text-green-700 hover:text-green-600'>{movie.original_language }</span></h5>
            <h5 className='font-semibold text-lg text-gray-600  hover:text-gray-500'>Rating :- <span className='text-green-700 hover:text-green-600'>{movie.vote_average }</span></h5>
            <h5 className='font-semibold text-lg text-gray-600  hover:text-gray-500'>Total Rating :- <span className='text-green-700 hover:text-green-600'>{movie.vote_count }</span></h5>
            <div className="border-2 border-gray-100  rounded-lg p-2 mb-2">
                <span className='first-letter:text-red-600 first-letter:text-xl text-md text-red-700 font-semibold text-xl' >Overview :: </span>
                {movie.overview}
            </div>
            </div>




            <div className="w-full text-center">
              {
                <div className="btn m-2 p-2 bg-orange-400 hover:bg-orange-600 active:bg-orange-800 text-center px-5 text-white hover:text-white hover:text-lg" onClick={handleClose}  >Go Back</div>
              }
            </div>
            <span className=' text-sm text-gray-700'>@ Created by Adi</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MovieCard