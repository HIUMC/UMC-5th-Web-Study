import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
const MovieDetail = () => {

  const location = useLocation();


  const { query } = useParams();
  const { poster_path } = location.state || {};


  return (
    <div>
      <h1 style={{color:"white"}}>영화 소개 페이지</h1>
      <h2 style={{color:"white"}}>{query}</h2>
      {poster_path && <img src={IMG_BASE_URL + poster_path} alt="Movie Poster" width="300"/>}


    </div>
  );
};

export default MovieDetail;
