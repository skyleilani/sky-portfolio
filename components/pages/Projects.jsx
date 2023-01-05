import React from 'react';
import tf from '../../public/tf.png';
import this_site from '../../public/this_site.png';
import ProjectCard from '../ProjectCard';

// Displays list of projects

const projects = () => {
  return (
    <div className='w-full min-h-screen h-max' id='projects'>
      <div className='h-max max-w-[11240px] mx-auto px-2 py-7 min-h-max '>
        <p className='text-md h-max tracking-widest uppercase text-red-400 mx-7 mb-48'>
          Projects
        </p>
        {/* Component displays a card for each unique project  */}
        <ProjectCard
          title='Equation Game'
          description='a true or false based equation game built with React'
          mobileDescription='React, TailwindCSS, Framer Motion'
          sourceCodeLink='https://github.com/skyleilani/true-or-false'
          liveLink='https://true-or-false.vercel.app/'
          imgSrc={tf}
          imgAlt='equation_game_img'
          tabDescription='A True or False based equation game
          where the user is presented with different equations 
          with a proposed answer which will be either correct or incorrect. 
          The game keeps track of the total number of questions asked & the number of 
                  correct answers.'
          moreTabDescription='
          Used state and props to store and pass data between components.
          Implemented event handlers to handle user interactions.
          Used Hooks to add state and perform side effects in functional components.
          Used JSX to create and style elements and components.
          Used the motion library to create animations in React'
        />
        <ProjectCard
          title='Portfolio (this site)'
          description='A web portfolio hosted on Vercel using Next JS, Tailwind CSS, with help from the Headless UI and Framer Motion libraries'
          sourceCodeLink='https://github.com/skyleilani/sky-portfolio'
          liveLink='https://sky-portfolio.vercel.app/'
          imgSrc={this_site}
          imgAlt='portfolio_img'
          tabDescription='A web portfolio with components for showcasing my code projects and certificates. '
          moreTabDescription='Proficiency in React.
          Experience with server-side rendering and optimization using Next JS.
          Knowledge of CSS and how to use a CSS framework CSS to quickly style an application.
          Ability to create smooth and engaging animations using Framer Motion.
          Familiarity with the useRef and useEffect hooks in React.
          Understanding of how to access and manipulate DOM elements using JavaScript.
          Knowledge of how to use the getBoundingClientRect method to get the dimensions and position of an element.
          Familiarity with the pageYOffset and scrollTop properties to get the current scroll position of the page or an element'
        />
      </div>
    </div>
  );
};
export default projects;
