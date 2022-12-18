import React from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

import styles from '../styles/Home.module.css';
import Main from '../components/pages/Main';
import Projects from '../components/pages/Projects';
import Carousel from '../components/pages/Projects/page/Carousel';
import Certificates from '../components/pages/Certificates';

import useMobileHeight from '../components/helpers/useMobileHeight';
import useSwipeDefine from '../components/helpers/useSwipeDefine';
import useContextValues from '../contexts/useContextValues';

export const PageContext = React.createContext();

const Home = () => {
  // const location = useLocation in react soolo
  const router = useRouter();
  useMobileHeight();

  const {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    touchAction,
    setTouchAction,
    stickySlide,
  } = useSwipeDefine();

  const { contextValues } = useContextValues({});

  const render = () => {
    return (
      <PageContext.Provider value={contextValues}>
        <div className={styles.container}>
          <Main />
          <Carousel />
          <Projects />
          <Certificates />
        </div>
      </PageContext.Provider>
    );
  };
  return render();
};

export default Home;
