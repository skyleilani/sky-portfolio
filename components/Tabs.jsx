import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Tabs component displays a scrollable container with a close button
const Tabs = ({
  onClose,
  imgSrc,
  imgAlt,
  tabDescription,
  moreTabDescription,
}) => {
  const container = useRef(null);
  const closeButton = useRef(null);
  const [currentPageYOffset, setCurrentPageYOffset] = useState(0);

  // function moveCloseButton updates the position of the close button
  // based on the position of the container element
  const moveCloseButton = () => {
    // get bounding rectangle of container element
    const parentRect = container.current.getBoundingClientRect();

    // calculate the start point of the scroll position where the close button should become fixed
    const start = parentRect.top + window.pageYOffset - window.innerHeight / 2;

    // calculate the end point of the scroll position where the close button should become absolute
    const stop =
      parentRect.bottom + window.pageYOffset - window.innerHeight / 2;

    // if the current scroll position is within the start and stop points,
    // set the close button to be fixed
    if (currentPageYOffset > start + 25 && currentPageYOffset < stop) {
      closeButton.current.style.setProperty('transition', '0s');
      closeButton.current.style.setProperty(
        'top',
        `${currentPageYOffset - start - 20}px`
      );
      closeButton.current.style.setProperty('position', 'fixed');
    }

    // if current scroll position is past stop point,
    // set close button to be absolute & positioned at bottom of container
    else if (currentPageYOffset > stop) {
      closeButton.current.style.setProperty('position', 'absolute');
      closeButton.current.style.setProperty('top', 'auto');
      closeButton.current.style.setProperty('bottom', '20px');
    }

    // if current scroll position is before start point,
    // set close button to be absolute & positioned at top of container
    else {
      closeButton.current.style.setProperty('position', 'absolute');
      closeButton.current.style.setProperty('top', '20px');
      closeButton.current.style.setProperty('bottom', 'auto');
    }
  };

  useEffect(() => {
    moveCloseButton();
    // add event listener to update close button position on scroll
    window.addEventListener('scroll', () =>
      setCurrentPageYOffset(window.pageYOffset)
    );

    // remove event listener on unmount
    return () => {
      window.removeEventListener('scroll', () =>
        setCurrentPageYOffset(window.pageYOffset)
      );
    };
  }, [currentPageYOffset, moveCloseButton]);

  return (
    <div className='py-5 ml-40 z-0'>
      <div
        className='flex border rounded-xl shadow-lg p-5 mx-5 w-8/12 h-3/6 bg-stone-100'
        ref={container}
      >
        <div className='text-left w-11/12  '>
                  <p>{tabDescription}</p>
                  
          <Image src={imgSrc} alt={imgAlt} width={500} height={300} />
          <p>{moreTabDescription}</p>
        </div>
        <div>
          <button
            type='button'
            onClick={onClose}
            ref={closeButton}
            className=' text-xl font-bold ml-8 '
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
