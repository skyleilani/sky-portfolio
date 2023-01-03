import React from 'react';
import tf from '../../public/tf.png';
import this_site from '../../public/this_site.png';
import ProjectCard from '../ProjectCard';

// Displays list of projects 

const projects = () => {
  return (
    <div className='w-full' id='projects'>
      <div className='max-w-[11240px] mx-auto px-2 py-7'>
        <p className='text-md tracking-widest uppercase text-red-400 mx-7 mb-20'>
          Projects
        </p>
        {/* Component displays a card for each unique project  */}
        <ProjectCard
          title='Equation Game'
          description='a true or false based equation game built with React'
          sourceCodeLink='https://github.com/skyleilani/equation-game-and-main-page-'
          projectLink='https://o41qk.csb.app/'
          imgSrc={tf}
          imgAlt='equation_game_img'
          tabDescription='loremipusum'
          moreTabDescription='loremipusum'
        
        />
        <ProjectCard
          title='Portfolio (this site)'
          description='A web portfolio hosted on Vercel using Next JS, Tailwind CSS, with help from the Headless UI and Framer Motion libraries'
          sourceCodeLink='https://github.com/skyleilani/sky-portfolio'
          projectLink='https://sky-portfolio.vercel.app/'
          imgSrc={this_site}
          imgAlt='portfolio_img'
          tabDescription=''
          moreTabDescription=''
        />
      </div>
    </div>
  );
};
export default projects;
