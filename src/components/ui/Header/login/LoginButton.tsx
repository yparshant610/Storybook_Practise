import React from 'react';

interface LoginButtonProps {
  text?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ text = "Login" }) => {
  return (
    <button
      style={{
        backgroundColor: '#ffffff',
        color: '#2e2f35',
        borderRadius: '12px',
        padding: '14px 22px 12px 22px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        fontSize: '15px',
        border: '2px solid #2e2f35',
        boxShadow: '3px 3px 0px 0px #2e2f35',
        outline: 'none',
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
};

export default LoginButton; 