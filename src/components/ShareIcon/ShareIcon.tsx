import {FC} from 'react';
import {MdLocationOn, MdPhotoLibrary} from 'react-icons/md';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {ImHappy2} from 'react-icons/im';

export const ShareIcon: FC = () => {
  return (
    <div className="flex gap-5 flex-col pt-8">
      <div className="flex gap-1">
        <MdPhotoLibrary className="text-2xl text-orange-900"/>
        <p>Photo or Video</p>
      </div>
      <div className="flex gap-1">
        <FaArrowAltCircleRight className="text-2xl text-blue-900"/>
        <p>Tag</p>
      </div>
      <div className="flex gap-1">
        <MdLocationOn className="text-2xl text-green-900"/>
        <p>Location</p>
      </div>
      <div className="flex gap-1">
        <ImHappy2 className="text-2xl text-yellow-400"/>
        <p>Feelings</p>
      </div>
    </div>
  );
};