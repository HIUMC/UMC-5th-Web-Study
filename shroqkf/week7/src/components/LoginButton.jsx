// LoginButton.js
import React from 'react';

const LoginButton = ({ onClick, onLoginSuccess, isCredentialsValid }) => {
  const handleClick = () => {
    onClick();
    if (isCredentialsValid) {
      onLoginSuccess();
    }
  };

  return (
    <button
      type="button"
      className={`loginbtn ${isCredentialsValid ? 'loginbtnOn' : ''}`}
      onClick={handleClick}
    >
      로그인
    </button>
  );
};

export default LoginButton;
