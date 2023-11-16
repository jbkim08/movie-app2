import { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      Title: 'The Amazing Spider-Man',
      Year: '2012',
      imdbID: 'tt0948470',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg',
    },
    {
      Title: 'The Amazing Spider-Man 2',
      Year: '2014',
      imdbID: 'tt1872181',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg',
    },
    {
      Title: 'The Amazing World of Gumball',
      Year: '2011–2019',
      imdbID: 'tt1942683',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYWU1YTA4OGUtNjcxMC00ZTllLTgxYWUtY2U5NmViZTU0MmNjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg',
    },
  ]);
  return <div>헬로우!</div>;
}

export default App;
