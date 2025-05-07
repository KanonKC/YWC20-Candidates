import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationBarLayout.css';

const NavigationBarLayout = ({ children }: { children?: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navigation-bar-container">
        <div className="navigation-bar-item" onClick={() => navigate('/')}>
          หน้าแรก
        </div>
        <div
          className="navigation-bar-item"
          onClick={() => navigate('/candidate-list')}
        >
          ดูรายชื่อผู้สมัคร
        </div>
      </div>
      {children}
    </div>
  );
};

export default NavigationBarLayout;
