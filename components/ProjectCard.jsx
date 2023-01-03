import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tabs from './Tabs';

// Project card is a function component that displays a card for each project
const ProjectCard = ({
  title,
  description,
  sourceCodeLink,
  liveLink,
  imgSrc,
  imgAlt,
  tabDescription,
  moreTabDescription
}) => {
  const [isTabsOpen, setIsTabsOpen] = useState(false);

  // toggleTabs is a function that toggles the value of isTabsOpen
  const toggleTabs = () => {
    setIsTabsOpen(!isTabsOpen);
  };

  return (
    <div>
      <div className='flex ml-40 z-10'>
        {/* shift element down by 15px when element is tapped */}
        <motion.div
          whileTap={{ y: 15 }}
          onClick={toggleTabs}
          className='border cursor-pointer rounded-xl shadow-lg px-10 pt-10 pb-20 m-5 w-8/12 bg-stone-100 hover:bg-stone-200 hover:shadow-2xl'
        >
          <div className='flex'>
            <div className='w-full tracking-wide'>
              <h1 className='mb-5 text-lg'>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </motion.div>
        <div className='m-5 mr-16 flex flex-col items-center'>
          <a
            className='border my-1 mb-10 p-2 shadow-md rounded-lg cursor-pointer bg-stone-100 hover:bg-stone-300 hover:translate-x-0.5'
            href={sourceCodeLink}
          >{`</>`}</a>
          <a
            className='border my-1 p-2 text-center shadow-md rounded-lg cursor-pointer bg-stone-100 hover:bg-stone-300 hover:translate-x-0.5 w-10'
            href={liveLink}
          >
            {`://`}
          </a>
        </div>
      </div>

      {/* If isTabsOpen is true, render the Tabs component */}
      {isTabsOpen && (
        // set initial position to 100% above normal position & completely transparent on first render
        // set animation target position to 0 and opacity to full
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25 }}
          style={{ zIndex: -1 }}
          className='justify-center items-center center-0 float-center text-center'
        >
          <Tabs
            onClose={toggleTabs}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            expand={isTabsOpen}
            setExpand={setIsTabsOpen}
            tabDescription={tabDescription}
            moreTabDescription={moreTabDescription}
            className='justify-center items-center center-0 float-center text-center'
          />
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
