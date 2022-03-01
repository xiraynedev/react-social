import {FC} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsFillChatFill, BsFillPersonFill} from 'react-icons/bs';
import {MdNotifications} from 'react-icons/md';

const person1Profile = require('../../assets/persons/person1-profile.webp');

export const TopBar: FC = () => {
  return (
    <>
      <section
        className="grid grid-cols-3 h-20 w-full items-center bg-blue-400 sticky top-0 z-10">
        <article>
          <span className='text-3xl text-white ml-4'>React Social</span>
        </article>
        <article className="flex gap-2 py-1 px-4 rounded-lg items-center bg-white">
          <AiOutlineSearch className='text-2xl mr-2'/>
          <input
            type="search"
            placeholder="Search friends, posts, or videos..."
            className='w-8/12 p-2 placeholder:text-emerald-900 outline-0 flex-1'
          />
        </article>
        <article className='flex gap-5 justify-center items-center'>
          <div className='flex gap-2 text-white tracking-wider text-xl'>
            <span>Homepage</span>
            <span>Timeline</span>
          </div>
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
          <div className='ml-12'>
            <img
              src={person1Profile}
              alt="profile picture of person 1"
              className='rounded-full'
            />
          </div>
        </article>
      </section>

    </>
  );
};