// interface
interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({type, children, disabled, ...props}: IButtonProps) => {
  return (
    <button type={type} disabled={disabled || false} {...props}>
      {children}
    </button>
  );
};

export default Button;
