import {FC} from 'react';
import {TopBar} from '../../components/TopBar/TopBar';
import {LeftSidebar} from '../../components/LeftSidebar/LeftSidebar';
import {Feed} from '../../components/Feed/Feed';
import {RightSidebar} from '../../components/RightSidebar/RightSidebar';

export const Home: FC = () => {
  return (
    <>
      <TopBar />
      <div className='grid grid-cols-12'>
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </>
  );
};