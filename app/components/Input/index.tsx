import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = '',
  type,
  ...props
}: InputProps) {
  if (type === 'checkbox')
    return (
      <>
        <input
          type="checkbox"
          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary  focus:ring-2"
          {...props}
        />
        {label && (
          <label
            htmlFor="orange-checkbox"
            className="ml-2 text-sm text-gray-900"
          >
            {label}
          </label>
        )}
      </>
    );

  return (
    <input
      type={type}
      className={`block w-full mb-2 py-3 px-5 rounded-full border ${
        error ? 'border-red-600' : 'border-gray-200'
      } ${className}`}
      {...props}
    />
  );
}
