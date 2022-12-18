import React, { useRef, useEffect, useContext } from 'react';
import { isMobile } from 'react-device-detect';
import { AnimatePresence } from 'framer-motion';

import DesktopSVG from '../../../helpers/DesktopSVG.jsx';
import MobileSVG from '../../../helpers/MobileSVG';
import usePreloader from '../../../helpers/usePreloader';

import Card from '../Card';
import { PageContext } from '../../../../pages/index';
import useXScroll from '../hooks/useXScroll'; 
import useSwipeDefine from '../../../helpers/useSwipeDefine';


const Carousel = ({ cardInfo, data = {}}) => {
  const { page } = useContext(PageContext);
  const { onTouchStart, onTouchMove, onTouchStop, sticky } = useSwipeDefine();
  const { pageData } = data;
  const { loading, Loading } = usePreloader(page.carousel.loadData);

  useEffect(() => {
    page.setSubPage('carousel');
  }, []);

  const refCont = useRef(null);
  const { elRef: refCards } = useXScroll(loading);

  const renderCardsDesktop = pageData?.carousel.images.desktop.map((img, i) => (
    <React.Fragment key={i}>
      <Slide type='component' data={<DesktopSVG data={img} type='image' />} />
    </React.Fragment>
  ));

  const renderCardsMobiole = pageData?.caorousel.videos.desktop.map((video, i) => (
    <React.Fragment key={i}>
      <Slide
        type="component"
        data={<DesktopSVG data={video} type="video" />}
      />
    </React.Fragment>
  ))

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Carousel;
