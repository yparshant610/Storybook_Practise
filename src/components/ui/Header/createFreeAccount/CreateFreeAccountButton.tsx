import React from 'react';

interface CreateFreeAccountButtonProps {
  text: string;
}

const CreateFreeAccountButton: React.FC<CreateFreeAccountButtonProps> = ({ text }) => {
  return (
    <button
      style={{
        background: '#ff6d2c',
        color: '#fff',
        borderRadius: '1rem',
        padding: '14px 26px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        fontSize: 14,
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

export default CreateFreeAccountButton; 