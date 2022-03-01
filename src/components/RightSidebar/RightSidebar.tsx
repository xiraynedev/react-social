import {FC} from 'react';
import {FaBirthdayCake} from 'react-icons/fa';
import {OnlineFriend} from '../OnlineFriend/OnlineFriend';

const birthdayPicture = require('../../assets/events/birthday.webp');
const person1ProfilePicture = require('../../assets/persons/person1-profile.webp');

export const RightSidebar: FC = () => {
  return (
    <>
      <section className="col-start-10 col-span-full">
        <div className="flex flex-col">
          <div className="flex gap-2 p-3 items-center">
            <FaBirthdayCake className="text-6xl text-red-500"/>
            <p>
              <span className="font-bold text-lg">Jane Knife</span> and
              <span className="font-bold text-lg"> 7 other friends</span> are also celebrating their birthdays today!
            </p>
          </div>
          <div className="border rounded-xl overflow-hidden">
            <img
              src={birthdayPicture}
              alt=""
              className=""
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
    </>
  );
};
