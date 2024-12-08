export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  value: string;
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
  isDisabled?: boolean;
} 