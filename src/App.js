import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import ScrollContainer from 'react-indiana-drag-scroll';

function App() {
  const [movies, setMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  //영화 데이터를 가져오기
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?apikey=6bfc4a64&s=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json(); //문자열을 객체형식으로 변환
    //영화정보를 업데이트하기
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    if (searchValue.length > 1) {
      getMovieRequest(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    //처음 시작시 myMovies가 있으면 가져와서 초기값 입력
    const movieFavourites = JSON.parse(localStorage.getItem('myMovies'));
    if (movieFavourites) {
      setMyMovies(movieFavourites);
    }
  }, []);
  //로컬스토리지에 선호작 저장하기
  const saveToLocalStorage = (items) => {
    localStorage.setItem('myMovies', JSON.stringify(items));
  };
  //선호작리스트(myMoviews)에 새로운 영화를 추가한다.
  const addMovie = (movie) => {
    const newList = [...myMovies, movie];
    setMyMovies(newList);
    saveToLocalStorage(newList);
  };
  //선호작제거
  const removeMovie = (movie) => {
    const newList = myMovies.filter((favorite) => favorite.imdbID !== movie.imdbID);
    setMyMovies(newList);
    saveToLocalStorage(newList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row align-items-center my-4">
        <MovieListHeading heading="영화 검색과 선호작 등록" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <ScrollContainer className="row scroll-container">
        {movies && <MovieList movies={movies} handleClick={addMovie} add={true} />}
      </ScrollContainer>
      <div className="row align-items-center my-4">
        <MovieListHeading heading="내 선호작" />
      </div>
      <ScrollContainer className="row scroll-container">
        {movies && <MovieList movies={myMovies} handleClick={removeMovie} add={false} />}
      </ScrollContainer>
    </div>
  );
}

export default App;
