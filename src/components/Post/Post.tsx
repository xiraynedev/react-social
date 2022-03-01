import {FC} from 'react';
import {AiFillLike} from 'react-icons/ai';
import {FaHeart} from 'react-icons/fa';

const person1ProfilePicture = require('../../assets/persons/person1-profile.webp');
const trainStationPicture = require('../../assets/scenery/train-station.webp');

export const Post: FC = () => {
  return (
    <div className="m-4 border p-4 rounded-lg shadow-lg mt-6 ml-6">
      <div className="flex items-center gap-4">
        <img
          src={person1ProfilePicture}
          alt="person 1 profile picture"
          className="rounded-full"
        />
        <p className="font-bold text-lg">Jane Knife</p>
        <p className="text-xs">5 mins ago</p>
        <div className="font-bold text-2xl rotate-90 ml-auto">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
      <img
        src={trainStationPicture}
        alt="train station picture"
        className="my-5"
      />
      <div className='flex gap-2 items-center'>
        <AiFillLike className='text-3xl p-1 text-white border rounded-full bg-blue-400'/>
        <FaHeart className='text-3xl p-1 border bg-red-500 text-white rounded-full'/>
        <p className='text-blue-900 font-bold tracking-wider'>37 people liked it!</p>
        <p className='ml-auto border-b-2 border-dotted border-b-blue-900'>11 comments</p>
      </div>
    </div>
  );
};