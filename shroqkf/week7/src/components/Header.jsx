// Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate('/'); // 로그인 버튼 클릭 시 로그인 페이지로 이동
  };

  return (
    <div className="header-container">
      <div className="inner-container">
        <img
          className="logo"
          style={{ width: '154px', height: '20px' }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
          onClick={goToHome}
        />
        <div className="letter-frame">
          <div className="movie">
            <Link to="/movie" style={{ textDecoration: 'none', color: 'white' }}>
              영화
            </Link>
          </div>
          <div className="tv">
            <Link to="/tv" style={{ textDecoration: 'none', color: 'white' }}>
              TV 프로그램
            </Link>
          </div>
          <div className="person">
            <Link to="/person" style={{ textDecoration: 'none', color: 'white' }}>
              인물
            </Link>
          </div>
        </div>

        <button className="login-button" onClick={handleLoginToggle}>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </button>
        <div style={{ color: 'white' }}>
          {isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}
        </div>
      </div>
    </div>
  );
};

export default Header;
