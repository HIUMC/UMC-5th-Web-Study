import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (user.id === '') {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (user.password === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    setLoggedIn(true);
    alert('로그인 성공!');
    navigate('/home');
  };

  const handleLogout =()=>{
    setLoggedIn(false);
    navigate('/login');
  };

  const isInputValid = user.id.length > 0 && user.password.length > 0;


  return (
    <>
      <div className="gray-background"></div>
      <div className="main-container">
        <div className="login-container">
          <h1 className="login-logo">UMC 7주차 로그인</h1>
          <div className="text-container">
            <input
              type="text"
              placeholder="아이디"
              value={user.id}
              onChange={(e) => setUser({ ...user, id: e.target.value })}
              maxLength="20"
              autoFocus
            />
          </div>
          <div className="text-container">
            <input
              type="password"
              placeholder="비밀번호"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              maxLength="16"
              onKeyUp={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>
          <div className="line"></div>
          <button onClick={handleLogin} 
                  type="button" 
                  className="loginbtn" 
                  style={{ backgroundColor: isInputValid ? 'orange' : 'gray' }}
                  disabled={!isInputValid}
                  >
            로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
