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
      closeButton.current.style.setProperty('bottom', '35px');
    }

    // if current scroll position is before start point,
    // set close button to be absolute & positioned at top of container
    else {
      closeButton.current.style.setProperty('position', 'absolute');
      closeButton.current.style.setProperty('top', '35px');
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

  // Split moreTabDescription text into an array of sentences
  const moreTabDescriptionList = moreTabDescription.split('.');

  return (
    <div className='py-5 items-center z-10 mr-5 '>
      <div
        className='flex w-4/5 sm:w-6/12 h-3/6 border rounded-xl shadow-lg p-5 mx-auto  h-3/6 bg-stone-100'
        ref={container}
      >
        <div className='text-left w-11/12 pl-5  '>
          <p className='my-5'>{tabDescription}</p>

          <Image src={imgSrc} alt={imgAlt} width={500} height={500} />
          <div className='text-center'>
            <h1 className='italic mt-5'> skills strengthened: </h1>
          </div>
          <ul className='my-5'>
            {moreTabDescriptionList.map((sentence, index) => (
              <li key={index} className='mb-2'>
                - {sentence}.
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            type='button'
            onClick={onClose}
            ref={closeButton}
            className=' text-xl font-bold ml-8 hover:text-lime-700'
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
