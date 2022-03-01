import React, {FC} from 'react';
import {IconType} from 'react-icons';

interface NavigationListItemProps {
  Icon: IconType;
  text: string;
}

export const NavigationListItem: FC<NavigationListItemProps> = ({Icon, text}) => {
  return (
    <li className='flex gap-1 mb-4'>
      <Icon className='text-xl'/>
      <span className=''>
        {text}
      </span>
    </li>
  );
};