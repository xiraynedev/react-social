import {FC} from 'react';
import {ShareIcon} from '../ShareIcon/ShareIcon';

const person1ProfilePicture = require('../../assets/persons/person1-profile.webp');

export const Share: FC = () => {
  return (
    <div className="m-4 border p-4 rounded-lg shadow-lg mt-6 ml-6">
      <div className="flex items-center gap-3">
        <img
          src={person1ProfilePicture}
          alt="person 1 profile picture"
          className="rounded-full"
        />
        <p className="text-gray-500 text-lg">What is for lunch today?</p>
      </div>
      <div className='flex items-center'>
        <ShareIcon/>
        <div className='mt-4 ml-8'>
          <button
            className='border shadow-lg py-2 px-8 mt-1 text-blue-900
            bg-green-300 font-bold tracking-wider rounded-lg'>Share</button>
        </div>
      </div>
    </div>
  );
};