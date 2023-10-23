import React from 'react';
import {Box} from '../UI';

interface IDropdownProps {
  classNameBox: string;
  children: React.ReactNode;
}

const Dropdown = ({children, classNameBox}: IDropdownProps) => {
  return <Box className={classNameBox}>{children}</Box>;
};

export default Dropdown;
