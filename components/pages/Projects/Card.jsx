import React, { useEffect, useRef, useState } from 'react';
import { isBrowser, isMobile } from 'react-device-detect';

const Card = ({ img, type, data }) => {
  const refImg = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const visibility = entries => {
    setIsVisible(entries[0].isIntersecting);
  };

  useEffect(() => {
    // visibility callback invoked when target is at 30% visibility
    const observer = new IntersectionObserver(visibility, { threshold: 0.3 });
    const node = refImg.current;

    if (refImg.current) {
      observer.observe(node);
    }

    //cleanup
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [refImg]);

  const activeStyle = {
    opacity: 1,
    transform: isBrowser ? 'translateY(0vh)' : 'trasnlateX(0vw)',
  };

  const disableStyle = {
    opacity: 0,
    transform: isBrowser ? 'translateY(-10vh)' : 'translateX(-10vw)',
  };

  const carouselComponent = () => {
    if (img && type === 'image') {
      return <img src={img} alt='slide-img' />;
    }

    if (type === 'component') {
      return <>{data}</>;
    }
  };

  return (
    <div ref={refImg} style={isVisible ? activeStyle : disableStyle}>
      {carouselComponent()}
    </div>
  );
};

export default Card;
