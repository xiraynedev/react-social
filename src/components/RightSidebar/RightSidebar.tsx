import {FC} from 'react';
import {FaBirthdayCake} from 'react-icons/fa';
import {OnlineFriend} from '../OnlineFriend/OnlineFriend';

const birthdayPicture = require('../../assets/events/birthday.webp');

export const RightSidebar: FC = () => {
  return (
      <section className="hidden lg:block lg:col-start-10 col-span-5 mx-4">
        <div className="flex flex-col">
          <div className="flex gap-2 mt-2 items-center">
            <FaBirthdayCake className="text-5xl shrink-0 my-2 text-red-500"/>
            <p className='my-3'>
              <span className="font-bold text-lg">Jane Knife</span> and
              <span className="font-bold text-lg"> 7 other friends</span> are also celebrating their birthdays today!
            </p>
          </div>
          <div className="border rounded-xl overflow-hidden">
            <img
              src={birthdayPicture}
              alt="birthday party picture"
            />
          </div>
          <p className="font-bold mt-8 text-xl">Online Friends</p>
          <OnlineFriend/>
          <OnlineFriend/>
          <OnlineFriend/>
          <OnlineFriend/>
          <OnlineFriend/>
          <OnlineFriend/>
          <OnlineFriend/>
        </div>
      </section>
  );
};
