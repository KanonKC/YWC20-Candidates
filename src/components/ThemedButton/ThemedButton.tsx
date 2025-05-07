import React from 'react';
import './ThemedButton.css';

interface ThemedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({ 
  children, 
  onClick, 
  className = '' 
}) => {
  return (
    <button 
      className={`themed-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ThemedButton;
