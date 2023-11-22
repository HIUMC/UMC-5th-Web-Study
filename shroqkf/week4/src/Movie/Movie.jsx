import React from 'react';
import {useState} from 'react';

import { Movie } from './Movie.style';

function Movie({title, poster_path, vote_average, id}) {
  const imageUrl = "https://image.tmdb.org/t/p/w300"; // 이미지의 URL
  const posterUrl = `${imageUrl}${poster_path}`;  // 포스터의 URL
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="movie"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src={posterUrl} alt={title} />
      {isHovered && (

        <div className="movie-details">
          <h4>{title}</h4>
          <span>{vote_average}</span>
          <p>{id}</p>
        </div>
      )}

    </div>
  );
}

function App() {
  return <AppContainer />;
  return <Movie />;
}

export default Movie;