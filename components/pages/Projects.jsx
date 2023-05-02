import React from 'react';
import tf from '../../public/tf.png';
import this_site from '../../public/this_site.png';
import unityMandelbrot from '../../public/unityMandelbrot.png';
import ProjectCard from '../ProjectCard';
import DaisyBotPic from '../../public/DaisyBotPic.png';

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
          title='DaisyBot Wiring Tutorial Video'
          description='a tutorial video on my wiring of an Arduino based robot'
          mobileDescription='Arduino, C++'
          sourceCodeLink='https://github.com/skyleilani/DaisyBot-Basic-Functions'
          liveLink='https://www.youtube.com/watch?v=GWxTk5iPvJU'
          imgSrc={DaisyBotPic}
          imgAlt='DaisyBotPic'
          tabDescription='A tutorial video on wiring Dr. Carlotta Berrys DaisyBot. '
          moreTabDescription='Basic wiring for the Arduino Mega, TB6612 Driver, and DC motors. 
                             Includes a github repository with basic functions for testing the circuit 
                              '
        />

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
          title='Unity Mandelbrot Explorer'
          description='a mandelbrot explorer made with shaders in Unity. '
          mobileDescription='React, TailwindCSS, Unity, HLSL, Arduino'
          sourceCodeLink='https://github.com/skyleilani/fractal-shader'
          liveLink='https://web-unity-mandelbrot.vercel.app/'
          imgSrc={unityMandelbrot}
          imgAlt='unityMandelbrot'
          tabDescription='A mandelbrot explorer made with Unity HLSL-based shaders.The Github repo also contains code for connecting to Arduino buttons, but the live link will take you to a WASD controlled web version. '
          moreTabDescription='Proficiency in using Unitys ShaderLab language and creating custom shaders.
          Solid understanding of mathematical concepts and ability to implement them in code.
          Experience in creating user-friendly and customizable graphics by using properties to control the look and feel of the Mandelbrot set.
          Solid understanding of Unity, computer graphics and mathematical concepts'
        />
        <ProjectCard
          title='Portfolio (this site)'
          description='A web portfolio hosted on Vercel using Next JS, Tailwind CSS, with help from the Headless UI and Framer Motion libraries'
          mobileDescription='Next.js, React, Tailwind CSS, Headless UI, Framer Motion'
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
