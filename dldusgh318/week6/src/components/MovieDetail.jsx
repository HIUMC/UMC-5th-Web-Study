import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
const MovieDetail = () => {

  const location = useLocation();

    //이부분에 코드 작성. 코드 테스트 할때는 아래 주석 풀고 실행해보세요.
    //아래의 주석처리된 부분의 query와 poster_path를 파라미터를 통해 가져와야 함.
    //코드는 두줄이면 됨. 쿼리를 어떻게 가져오는지에 대한 중요한 실습이니 꼭 생각 해보기.
    //정답은 내일 스터디시간에 공개하겠습니다.
    const {query}=useParams();
    const {poster_path}=location.state || {};

  return (
    <div>
      <h1 style={{color:"white"}}>영화 소개 페이지</h1>
      <h2 style={{color:"white"}}>{query}</h2>
      {poster_path && <img src={IMG_BASE_URL + poster_path} alt="Movie Poster" width="300"/>}
    </div>
  );
};

export default MovieDetail;
