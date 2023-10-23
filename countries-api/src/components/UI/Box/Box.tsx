// interface
interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Box = ({children, className, ...props}: IBoxProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default Box;
