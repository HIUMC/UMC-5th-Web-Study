import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your CSS file

const Login = () => {
  const [user, setUser] = useState({
    id: '',
    password: '',
  });

  const navigate = useNavigate();
  const [button,setButton]=useState('loginbtn');

  const handleLogin = () => {
    if (user.id === '') {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (user.password === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    setButton('loginbtnOn');

    if(button==='loginbtnOn'){
      alert('로그인 성공!');
      navigate("/home");
    }
    
};


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
          <button onClick={handleLogin} type="button" className={button}>
            로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
