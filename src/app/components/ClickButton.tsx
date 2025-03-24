// src/app/components/ClickButton.tsx
import React from 'react';

type ClickButtonProps = {
  onClick: () => void;
  count: number;
  label: string;
  color?: string;
};

const ClickButton: React.FC<ClickButtonProps> = ({ onClick, label, color = 'black' }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '15px 30px',
        fontSize: '18px',
        backgroundColor: color,
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
    >
      {label}
    </button>
  );
};

export default ClickButton;
