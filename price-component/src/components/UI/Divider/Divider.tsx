import {FC} from 'react';

interface IDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Divider: FC<IDividerProps> = ({className, ...props}) => {
  return <div className={className} {...props}></div>;
};

export default Divider;
