import {FC} from 'react';

const person1ProfilePicture = require('../../assets/persons/person1-profile.webp');

export const OnlineFriend: FC = () => {
  return (
    <div className="flex items-center gap-3 mt-6">
      <div className='relative'>
        <img
          src={person1ProfilePicture} alt="person 1 profile picture"
          className="rounded-full w-20 h-20"
        />
        <span className='bg-green-400 w-5 h-5 rounded-full absolute -top-1 right-3'></span>
      </div>
      <p className="font-bold text-xl">Jane Knife</p>
    </div>
  );
};