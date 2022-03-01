import {FC} from 'react';
import {Share} from '../Share/Share';
import {Post} from '../Post/Post';

export const Feed: FC = () => {
  return (
    <section className="col-start-4 col-end-10">
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
