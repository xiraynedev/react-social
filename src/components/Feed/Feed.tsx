import {FC} from 'react';
import {Share} from '../Share/Share';
import {Post} from '../Post/Post';

export const Feed: FC = () => {
  return (
    <section className="col-start-5 col-end-12 lg:col-start-3 lg:col-span-full lg:col-end-10">
      <Share/>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  );
};
