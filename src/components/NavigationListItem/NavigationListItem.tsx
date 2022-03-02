import React, {FC} from 'react';
import {IconType} from 'react-icons';

interface NavigationListItemProps {
  Icon: IconType;
  text: string;
}

export const NavigationListItem: FC<NavigationListItemProps> = ({Icon, text}) => {
  return (
    <li className='flex gap-2 items-center mb-2'>
      <Icon className='text-3xl lg:text-2xl'/>
      <span className='text-xs sm:text-xl'>
        {text}
      </span>
    </li>
  );
};