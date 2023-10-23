import React from 'react';
import {twMerge as tw} from 'tailwind-merge';

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: React.HTMLInputTypeAttribute;
}

const Input = ({className, type, ...props}: IInputProps) => {
  return (
    <input type={type || 'text'} className={tw('', className)} {...props} />
  );
};

export default Input;
