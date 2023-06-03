import { SelectHTMLAttributes } from 'react';

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export default function Select({
  label,
  error,
  className = '',
  options,
  placeholder,
  value,
  ...props
}: InputProps) {
  return (
    <select
      className={`block mb-2 py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b ${
        error ? 'border-red-600' : 'border-gray-200'
      } appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer ${className}`}
      {...props}
    >
      {placeholder && !value && <option selected>{placeholder}</option>}
      {options.map(({ value: v, label: l }) => (
        <option value={v} selected={value === v}>
          {l}
        </option>
      ))}
    </select>
  );
}
