import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({
    id: '',
    password: '',
  });
  const loginbtnOn = ( !(user.id === '') && !(user.password === ''));
  const navigate = useNavigate();
 
  const handleLogin = () => {
    const requestData = {
      id: user.id,
      pw: user.password
    };
  
    axios.post('http://localhost:8000/user/login', requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(result => {
        console.log('로그인 성공 결과:', result.data); //콘솔로 어떤 데이터를 받는지 확인
        if (result.data.code===2000) {
          alert(result.data.message);
          console.log(result.data.result.AccessToken); //AccessToken 값은 제가 찾아서 써놨어요
          console.log(result.data.result.userId); //콘솔을 통해 직접 찾아보세요
          localStorage.setItem('token', result.data.result.AccessToken);
          localStorage.setItem('id', result.data.result.userId );
          navigate('/home');
        } else {
          alert(result.data.message);
        }
      })
      .catch(error => {
        console.error('에러 발생:', error);
        alert(error.response.data.message);
      });
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

          {loginbtnOn
          ?
            <button onClick={handleLogin} type="button" className= "loginbtnOn">
              로그인
            </button>
          :
            <button onClick={handleLogin} type="button" className="loginbtn">
              로그인
            </button>
          }
          
        </div>
      </div>
    </>
  );
};

export default Login;