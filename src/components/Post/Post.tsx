import {FC} from 'react';
import {AiFillLike} from 'react-icons/ai';
import {FaHeart} from 'react-icons/fa';

const person1ProfilePicture = require('../../assets/persons/person1-profile.webp');
const trainStationPicture = require('../../assets/scenery/train-station.webp');

export const Post: FC = () => {
  return (
    <div className="m-4 border p-6 rounded-lg shadow-lg mt-6 ml-6">
      <div className="flex flex-col md:flex-row items-center md:gap-4">
        <img
          src={person1ProfilePicture}
          alt="person 1 profile picture"
          className="rounded-full mb-2 md:mb-0 self-start w-20 h-20"
        />
        <div className='flex flex-col lg:flex-row self-start items-center lg:gap-5'>
          <p className="self-start lg:self-center font-bold text-lg">Jane Knife</p>
          <p className="self-start lg:self-center text-xs">5 mins ago</p>
        </div>
        <div className="font-bold text-2xl rotate-90 ml-auto -translate-y-10 translate-x-7 md:translate-x-0 md:translate-y-0">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
      <img
        src={trainStationPicture}
        alt="train station picture"
        className="mb-4 md:mb-0 md:my-2"
      />
      <div className="flex flex-col gap-2 items-center">
        <div className='flex self-start my-4 gap-3'>
          <AiFillLike className="text-3xl p-1 text-white border rounded-full bg-blue-400"/>
          <FaHeart className="text-3xl p-1 border bg-red-500 text-white rounded-full"/>
        </div>
        <div className='flex flex-col self-start'>
          <p className="text-blue-900 font-bold tracking-wider">37 people liked it!</p>
          <p className="mt-3 border-b-2 border-dotted border-b-blue-900">11 comments</p>
        </div>
      </div>
    </div>
  );
};