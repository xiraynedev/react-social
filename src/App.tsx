import {FC} from 'react';
import {Home} from './pages/Home/Home';
import {TopBar} from './components/TopBar/TopBar';

export const App: FC = () => {
  return (
    <>
      <TopBar />
      <Home />
    </>
  );
};