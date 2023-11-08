import React from 'react'
import { useNavigate } from 'react-router-dom';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
export default function Movie({ title, poster_path, vote_average }) {
    const navigate = useNavigate();
    const onClickImg = () => {
        navigate(`/movie/${title}`, {
          state: { poster_path },
        });
      };
    return (
        <div className="movie-container">
            <img src={IMG_BASE_URL + poster_path} alt="영화포스터" onClick={onClickImg}/>
            <div className="movie-info">
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>
        </div>
    );
}

