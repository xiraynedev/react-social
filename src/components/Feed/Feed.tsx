import {FC} from 'react';
import {ShareIcon} from '../ShareIcon/ShareIcon';

const person1ProfilePicture = require('../../assets/persons/person1-profile.webp');

export const Feed: FC = () => {
  return (
    <>
      <section className="col-start-4 col-end-10">
        <div className="m-4 border p-4 rounded-lg shadow-lg mt-6 ml-6">
          <div className="flex items-center gap-3">
            <img
              src={person1ProfilePicture}
              alt="person 1 profile picture"
              className="rounded-full"
            />
            <p className="text-gray-500 text-lg">What is for lunch today?</p>
          </div>
          <ShareIcon/>
        </div>
      </section>
    </>
  );
};
