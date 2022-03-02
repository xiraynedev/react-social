import {FC} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsFillChatFill, BsFillPersonFill} from 'react-icons/bs';
import {MdNotifications} from 'react-icons/md';

const person1Profile = require('../../assets/persons/person1-profile.webp');

export const TopBar: FC = () => {
  return (
      <header
        className="bg-blue-400 sticky top-0 z-10 pt-6 lg:py-8 lg:flex items-center">
        <div>
          <h1 className='text-center text-3xl text-white mx-10'>React Social</h1>
        </div>
        <div className="flex items-center w-11/12 mx-auto p-2 my-4 rounded-lg bg-white
        lg:w-1/2 lg:justify-between">
          <AiOutlineSearch className='text-2xl'/>
          <input
            type="search"
            placeholder="Search friends, posts, or videos..."
            className='w-8/12 p-2 placeholder:text-emerald-900 outline-0'
          />
        </div>
        <div className='hidden lg:visible lg:flex flex-1 justify-end gap-5 mx-10'>
            <div className="flex relative">
              <BsFillPersonFill className='text-2xl'/>
              <span className='absolute -top-3 -right-3 bg-red-300 font-bold border rounded-full text-xs px-2'>1</span>
            </div>
            <div className="flex relative">
              <BsFillChatFill className='text-2xl'/>
              <span className='absolute -top-3 -right-3 bg-red-300 font-bold border rounded-full text-xs px-2'>2</span>
            </div>
            <div className="flex relative">
              <MdNotifications className='text-2xl'/>
              <span className='absolute -top-3 -right-3 bg-red-300 font-bold border rounded-full text-xs px-2'>1</span>
            </div>
        </div>
            <div className='invisible lg:visible mr-12'>
              <img
                src={person1Profile}
                alt="profile picture of person 1"
                className='rounded-full'
              />
            </div>
      </header>
  );
};