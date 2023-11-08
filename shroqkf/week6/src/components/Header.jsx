import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';
import "./Header.css";
const Header = () => {

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="header-container">
      <div className="inner-container">
        <img
          className="logo"
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
          onClick={goToHome}/>
        <div className="letter-frame">
          <div className="movie"><Link to="/movie" style={{ textDecoration: "none" , color:"white"}}>영화</Link></div>
          <div className="tv"><Link to="/tv" style={{ textDecoration: "none" , color:"white"}}>TV 프로그램</Link></div>
          <div className="person"><Link to="/person" style={{ textDecoration: "none" , color:"white"}}>인물</Link></div>
        </div>

        <button className="login-button" onClick={handleClick}>
          {isLoggedIn ? '로그인' : '로그아웃'}
        </button> 
        <div style={{color:"white"}}>
          {isLoggedIn ? '로그인 해주세요!' : '환영합니다!'}
        </div>

      </div>
    </div>
  );
};
export default Header;