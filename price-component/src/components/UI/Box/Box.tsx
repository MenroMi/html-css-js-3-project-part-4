import {FC} from 'react';

interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Box: FC<IBoxProps> = ({children, ...props}) => {
  return <div {...props}>{children}</div>;
};

export default Box;
