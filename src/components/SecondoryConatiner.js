import React from 'react'
import MovieList from './nowPlaingMovieList'
import { useSelector } from 'react-redux'
import PopularMovieList from './popularMovieList'
import UpcomingMovieList from './upcoming'
import Footer from './Footer/footer'

const SecondoryConatiner = () => {

  const movies= useSelector((store)=> store.movies)

  return (
    <div className=' absolute top-5 mt-[75%] md:mt-[45%] bg-gradient-to-r from-black bg-opacity-50 box-border'>
      
      <div className='bg-black'>

      <MovieList title="Now Playing" moviesList={movies}/>
      <PopularMovieList title="Top Rated" moviesList={movies}/>
      <UpcomingMovieList title="Upcoming" moviesList={movies}/>
      <MovieList title="Tranding" moviesList={movies}/>
      </div>
      <div className="z-50 relative">
        <Footer />
      </div>
    </div>
  )
}

export default SecondoryConatiner
