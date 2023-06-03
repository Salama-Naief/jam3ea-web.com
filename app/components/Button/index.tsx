import { ButtonHTMLAttributes, FC } from 'react';
import { LoadingIcon } from '../Icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[] | string;
  loading?: boolean;
}

export default function Button({
  children,
  className = '',
  loading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-full bg-primary py-2 rounded-full text-white mb-3 ${className}`}
      disabled={loading}
      type={props.type || 'button'}
      {...props}
    >
      {loading ? <LoadingIcon /> : children}
    </button>
  );
}
