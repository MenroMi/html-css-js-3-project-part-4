// basic
import React from 'react';
import {createPortal} from 'react-dom';

// interface
interface IPortalToBodyProps {
  children: React.ReactNode;
}

const PortalToBody = ({children}: IPortalToBodyProps) => {
  return createPortal(children, document.querySelector('#root')!);
};

export default PortalToBody;
