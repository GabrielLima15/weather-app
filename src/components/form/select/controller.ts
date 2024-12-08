import { useState } from 'react';
import type { Option } from './types';

export function useSelectController(value: string, options: Option[]) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(option => option.value === value);

  const handleSelect = (option: Option, onSelect: (value: string) => void) => {
    onSelect(option.value);
    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    selectedOption,
    handleSelect,
  };
} 