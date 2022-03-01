import React, {FC} from 'react';
import {IconType} from 'react-icons';

interface NavigationLinkProps {
  Icon: IconType;
  text: string;
}

export const NavigationLink: FC<NavigationLinkProps> = ({Icon, text}) => {
  return (
    <li className='flex gap-1'>
      <Icon className='text-xl'/>
      <span className=''>
        {text}
      </span>
    </li>
  );
};