import {FC} from 'react';
import {ShareIcon} from '../ShareIcon/ShareIcon';

const person1ProfilePicture = require('../../assets/persons/person1-profile.webp');

export const Share: FC = () => {
  return (
    <div className="m-4 border p-4 rounded-lg shadow-lg mt-6 ml-6">
      <div className="flex flex-col md:flex-row items-center gap-3 border-b-2 pb-4">
        <img
          src={person1ProfilePicture}
          alt="person 1 profile picture"
          className="rounded-full w-20 h-20"
        />
        <p className="text-gray-500 text-lg">What is for lunch today?</p>
      </div>
      <div className="flex items-center relative">
        <div className='flex flex-col gap-2'>
          <ShareIcon/>
          <button
            className="border shadow-lg py-2 px-2 mt-3 mb-2 text-blue-900
            bg-green-300 font-bold tracking-wider rounded-lg md:absolute bottom-0 right-5">Share
          </button>
        </div>
      </div>
    </div>
  );
};