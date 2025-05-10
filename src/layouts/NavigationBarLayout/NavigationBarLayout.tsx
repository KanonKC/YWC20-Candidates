import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationBarLayout.css';
import ywc20Logo from '../../../public/ywc20-logo.webp';

const NavigationBarLayout = ({
  children,
  noAutoPaddingTop = false,
}: {
  children?: React.ReactNode;
  noAutoPaddingTop?: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navigation-bar-container">
        <div>
          <img width={150} src={ywc20Logo} alt="logo" />
        </div>
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
      <div className={!noAutoPaddingTop ? 'navgation-bar-children' : ''}>
        {children}
      </div>
    </div>
  );
};

export default NavigationBarLayout;
