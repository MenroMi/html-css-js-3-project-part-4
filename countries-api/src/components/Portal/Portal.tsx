// basic
import React from 'react';
import {createPortal} from 'react-dom';

// interface
interface IPortalToRootProps {
  children: React.ReactNode;
}

const PortalToRoot = ({children}: IPortalToRootProps) => {
  return createPortal(children, document.querySelector('#root')!);
};

export default PortalToRoot;
