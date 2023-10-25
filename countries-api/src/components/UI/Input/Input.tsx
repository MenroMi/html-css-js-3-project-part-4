// basic
import React from 'react';

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: React.HTMLInputTypeAttribute;
  value?: string | number | readonly string[];
}

const Input = ({className, type, value, ...props}: IInputProps) => {
  return (
    <input
      value={value}
      type={type || 'text'}
      className={className}
      {...props}
    />
  );
};

export default Input;
