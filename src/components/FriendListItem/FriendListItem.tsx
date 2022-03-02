import {FC} from 'react';

interface FriendListItemProps {
  person1ProfilePicture: any;
  text: string;
  altText: string;
}

export const FriendListItem: FC<FriendListItemProps> = ({person1ProfilePicture, text, altText}) => {
  return (
    <li className='flex flex-col md:flex-row items-center gap-2 ml-3 mt-6'>
      <img className='rounded-full' src={person1ProfilePicture} alt="friend profile picture"/>
      <span>{text}</span>
    </li>
  );
};