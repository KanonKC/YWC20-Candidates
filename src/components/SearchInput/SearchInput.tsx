import React from 'react';
import './SearchInput.css';
import { Loader2 } from 'lucide-react';
import ThemedButton from '../ThemedButton/ThemedButton';
import { cn } from '@/lib/utils';

const SearchInput = ({
  isLoading = false,
  value,
  onChange,
  onSearch,
}: {
  isLoading?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
}) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('e.key', e.key);
    if (e.key === 'Enter') {
      onSearch?.();
    }
  };
  return (
    <div className="search-container">
      <input
        className="search-input"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="ใส่ชื่อจริง นามสกุล"
      />
      <ThemedButton onClick={onSearch} className="search-button">
        <span className={cn({
            'invisible': isLoading,
        })}>ดูผลการสมัคร</span>
        {isLoading && <Loader2 size={48} className="animate-spin loader-icon" />}
      </ThemedButton>
      
    </div>
  );
};

export default SearchInput;
