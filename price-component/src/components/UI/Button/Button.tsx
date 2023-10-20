import {FC} from 'react';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<IButtonProps> = ({children, type, ...props}) => {
  return (
    <button type={type || 'button'} {...props}>
      {children}
    </button>
  );
};

export default Button;
