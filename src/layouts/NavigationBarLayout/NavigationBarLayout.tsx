import React, { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationBarLayout.css';
import ywc20Logo from '../../../public/ywc20-logo.webp';
import { cn } from '@/lib/utils';

const NavigationBarLayout = ({
  children,
  noAutoPaddingTop = false,
}: {
  children?: React.ReactNode;
  noAutoPaddingTop?: boolean;
}) => {
  const navigate = useNavigate();

  const isCandidateListPage = useMemo(() => {
    return window.location.pathname === '/candidate-list';
  }, []);

  useEffect(() => {
  }, [isCandidateListPage]);

  return (
    <div>
      <div className="navigation-bar-container">
        <div className='navigation-bar-logo'>
          <img src={ywc20Logo} alt="logo" />
        </div>
        <div
          className={cn('navigation-bar-item', {
            'themed-color': !isCandidateListPage,
          })}
          onClick={() => navigate('/')}
        >
          หน้าแรก
        </div>
        <div
          className={cn('navigation-bar-item', {
            'themed-color': isCandidateListPage,
          })}
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
