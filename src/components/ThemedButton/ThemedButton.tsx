import React from 'react';
import './ThemedButton.css';
import { cn } from '@/lib/utils';

const ThemedButton = ({
  variant = 'primary',
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'ghost';
}) => {
  return (
    <button className={cn('themed-button',className, {
        'primary': variant === 'primary',
        'ghost': variant === 'ghost',
    })} onClick={onClick}>
      {children}
    </button>
  );
};

export default ThemedButton;
