import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tabs from './Tabs';

// Project card is a function component that displays a card for each project
const ProjectCard = ({
  title,
  description,
  mobileDescription,
  sourceCodeLink,
  liveLink,
  imgSrc,
  imgAlt,
  tabDescription,
  moreTabDescription,
}) => {
  const [isTabsOpen, setIsTabsOpen] = useState(false);

  // toggleTabs is a function that toggles the value of isTabsOpen
  const toggleTabs = () => {
    setIsTabsOpen(!isTabsOpen);
  };

  return (
    <div className='items-center'>
      <div className='flex justify-center z-10'>
        {/* shift element down by 15px when element is tapped */}
        <div className=' w-full '>
          <div className='flex items-center justify-center'>
            <motion.div
              whileTap={{ y: 15 }}
              onClick={toggleTabs}
              className='border w-full sm:w-3/6 ml-10 cursor-pointer rounded-xl shadow-lg p-10 pb-20 m-5 w-full sm:w-9/12 bg-stone-100 hover:bg-stone-200 hover:shadow-2xl'
            >
              <div className='w-full tracking-wide'>
                <h1 className='mb-5 text-md sm:text-lg'>{title}</h1>
                {/* show description on large screens, hide on small screens */}
                <p className='hidden sm:block'>{description}</p>

                {/* show the mobile description on small screens and hide on large screens */}
                <p className='block sm:hidden text-sm italic'>
                  {mobileDescription}
                </p>
              </div>
            </motion.div>

            {/* source code and live project buttons */}
            <div className='flex flex-col'>
              <a
                className='border text-xs sm:text-md my-1 mb-10 p-2 shadow-md rounded-lg cursor-pointer bg-stone-100 hover:bg-stone-300 hover:translate-x-0.5'
                href={sourceCodeLink}
              >{`</>`}</a>
              <a
                className='border text-sm sm:text-md my-1 p-2 text-center shadow-md rounded-lg cursor-pointer bg-stone-100 hover:bg-stone-300 hover:translate-x-0.5 w-fit sm:w-10'
                href={liveLink}
              >
                {`://`}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* If isTabsOpen is true, render the Tabs component */}
      {isTabsOpen && (
        // set initial position to 100% above normal position & completely transparent on first render
        // set animation target position to 0 and opacity to full

        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'linear', duration: 1 }}
        >
          <Tabs
            onClose={toggleTabs}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            expand={isTabsOpen}
            setExpand={setIsTabsOpen}
            tabDescription={tabDescription}
            moreTabDescription={moreTabDescription}
          />
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
