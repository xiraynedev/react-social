import {FC} from 'react';
import {NavigationLink} from '../NavigationLink/NavigationLink';
import {MdRssFeed} from 'react-icons/md';
import {BsChatSquareDots} from 'react-icons/bs';
import {MdOutlineOndemandVideo} from 'react-icons/md';
import {MdOutlineGroups} from 'react-icons/md';
import {BsBookmark} from 'react-icons/bs';
import {BsQuestionSquare} from 'react-icons/bs';
import {BsBriefcase} from 'react-icons/bs';
import {BsCalendarDate} from 'react-icons/bs';
import {FaGraduationCap} from 'react-icons/fa';

export const LeftSidebar: FC = () => {
  return (
    <>
      <div className='col-start-1 col-end-4'>
        <ul className='ml-3 mt-3'>
          <NavigationLink Icon={MdRssFeed} text='Feed'/>
          <NavigationLink Icon={BsChatSquareDots} text='Chats'/>
          <NavigationLink Icon={MdOutlineOndemandVideo} text='Videos'/>
          <NavigationLink Icon={MdOutlineGroups} text='Groups'/>
          <NavigationLink Icon={BsBookmark} text='Bookmarks'/>
          <NavigationLink Icon={BsQuestionSquare} text='Questions'/>
          <NavigationLink Icon={BsBriefcase} text='Jobs'/>
          <NavigationLink Icon={BsCalendarDate} text='Events'/>
          <NavigationLink Icon={FaGraduationCap} text='Courses'/>
        </ul>
      </div>
    </>
  );
};