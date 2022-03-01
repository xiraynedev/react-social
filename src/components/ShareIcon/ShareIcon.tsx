import {FC} from 'react';
import {MdLocationOn, MdPhotoLibrary} from 'react-icons/md';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {ImHappy2} from 'react-icons/im';

export const ShareIcon: FC = () => {
  return (
    <div className="flex gap-5 m-8 border-t-2 pt-8">
      <div className="flex items-center gap-2">
        <MdPhotoLibrary className="text-3xl text-orange-900"/>
        <p className="text-lg">Photo or Video</p>
      </div>
      <div className="flex items-center gap-2">
        <FaArrowAltCircleRight className="text-2xl text-blue-900"/>
        <p className="text-lg">Tag</p>
      </div>
      <div className="flex items-center gap-1">
        <MdLocationOn className="text-3xl text-green-900"/>
        <p className="text-lg">Location</p>
      </div>
      <div className="flex items-center gap-2">
        <ImHappy2 className="text-2xl text-yellow-400"/>
        <p className="text-lg">Feelings</p>
      </div>
    </div>
  );
};