import React, { useState } from 'react';
import './Login.css';
import LoginButton from './LoginButton';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    id: '',
    password: '',
  });
  const [isCredentialsValid, setIsCredentialsValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
      if (user.id === '') {
        alert('아이디를 입력해주세요.');
        return;
      }
      if (user.password === '') {
        alert('비밀번호를 입력해주세요.');
        return;
      }
      alert('로그인 성공!');

    setIsCredentialsValid(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToLoginPage = () => {
    navigate('/login');
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
          <LoginButton
            onClick={handleLogin}
            onLoginSuccess={goToLoginPage}
            isCredentialsValid={isCredentialsValid}
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>로그인 성공!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

