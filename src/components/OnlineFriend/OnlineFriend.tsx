import {FC} from 'react';

const person1ProfilePicture = require('../../assets/persons/person1-profile.webp');

export const OnlineFriend: FC = () => {
  return (
    <div className="flex items-center gap-3 mt-6">
      <div className='relative'>
        <img
          src={person1ProfilePicture} alt="person 1 profile picture"
          className="rounded-full"
        />
        <span className='bg-green-400 w-4 h-4 rounded-full absolute -top-1 right-0'></span>
      </div>
      <p className="font-bold text-xl">Jane Knife</p>
    </div>
  );
};