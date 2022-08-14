import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './component/MovieList';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [movieList, setMovieList] = useState([]);

  const API_KEY = "16c66b0f7fd3c3447e7067ff07db3197";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchData);
  }

  useEffect(() => {
     const fetchData = async () => {
      try{
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchData}`)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => setMovieList(response.results))
        console.log(movieList)
      }
      catch(error){
        console.log(error)
      }
     }

    (searchData.length != 0)? fetchData() : setMovieList([])

  },[searchData])
 
  return (
   <div className='container-fluid py-5'>
    <div className='text-center'>
      <h2 className='display-6 text-white'>Movie<span className='text-danger'> Finder</span></h2>
    </div>
 
    <div className='container'>
      <div className='row'>
        <div className='col-5 mx-auto'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
             tpye="text" 
             className='form-control border-0 shadow-0' 
             placeholder='type movie name'
             value={searchData}
             onChange={(e) => setSearchData(e.target.value)}/>
          </form>
        </div>
      </div>
       <MovieList movieList={movieList}/>  
    </div>
   </div>
  );
}

export default App;
