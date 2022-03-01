import {FC} from 'react';
import {NavigationListItem} from '../NavigationListItem/NavigationListItem';
import {MdRssFeed} from 'react-icons/md';
import {BsChatSquareDots} from 'react-icons/bs';
import {MdOutlineOndemandVideo} from 'react-icons/md';
import {MdOutlineGroups} from 'react-icons/md';
import {BsBookmark} from 'react-icons/bs';
import {BsQuestionSquare} from 'react-icons/bs';
import {BsBriefcase} from 'react-icons/bs';
import {BsCalendarDate} from 'react-icons/bs';
import {FaGraduationCap} from 'react-icons/fa';
import {FriendListItem} from '../FriendListItem/FriendListItem';

const person1ProfilePicture = require('../../assets/persons/person1-profile.webp');

export const LeftSidebar: FC = () => {
  return (
    <>
      <div className='col-start-1 col-end-4 overflow-y-scroll'>
        <ul className='ml-3 mt-3'>
          <NavigationListItem Icon={MdRssFeed} text='Feed'/>
          <NavigationListItem Icon={BsChatSquareDots} text='Chats'/>
          <NavigationListItem Icon={MdOutlineOndemandVideo} text='Videos'/>
          <NavigationListItem Icon={MdOutlineGroups} text='Groups'/>
          <NavigationListItem Icon={BsBookmark} text='Bookmarks'/>
          <NavigationListItem Icon={BsQuestionSquare} text='Questions'/>
          <NavigationListItem Icon={BsBriefcase} text='Jobs'/>
          <NavigationListItem Icon={BsCalendarDate} text='Events'/>
          <NavigationListItem Icon={FaGraduationCap} text='Courses'/>
        </ul>
        <button className='bg-gray-100 py-2 px-10 ml-3 my-2 rounded'>Show More</button>
        <ul className='border-t-2 w-11/12 mx-auto mt-6'>
          <FriendListItem
            person1ProfilePicture={person1ProfilePicture}
            text='Jane Knife'
            altText={`Jane's profile picture`}
          />
          <FriendListItem
            person1ProfilePicture={person1ProfilePicture}
            text='Jane Knife'
            altText={`Jane's profile picture`}
          />
          <FriendListItem
            person1ProfilePicture={person1ProfilePicture}
            text='Jane Knife'
            altText={`Jane's profile picture`}
          />
          <FriendListItem
            person1ProfilePicture={person1ProfilePicture}
            text='Jane Knife'
            altText={`Jane's profile picture`}
          />
          <FriendListItem
            person1ProfilePicture={person1ProfilePicture}
            text='Jane Knife'
            altText={`Jane's profile picture`}
          />
          <FriendListItem
            person1ProfilePicture={person1ProfilePicture}
            text='Jane Knife'
            altText={`Jane's profile picture`}
          />
          <FriendListItem
            person1ProfilePicture={person1ProfilePicture}
            text='Jane Knife'
            altText={`Jane's profile picture`}
          />
          <FriendListItem
            person1ProfilePicture={person1ProfilePicture}
            text='Jane Knife'
            altText={`Jane's profile picture`}
          />
          <FriendListItem
            person1ProfilePicture={person1ProfilePicture}
            text='Jane Knife'
            altText={`Jane's profile picture`}
          />
        </ul>
      </div>
    </>
  );
};