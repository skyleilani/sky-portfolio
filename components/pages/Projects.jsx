import React from 'react';
import tf from '../../public/tf.png';
import this_site from '../../public/this_site.png';
import ProjectCard from '../ProjectCard';

// Displays list of projects

const projects = () => {
  return (
    <div className='w-full h-screen' id='projects'>
      <div className='max-w-[11240px] mx-auto px-2 py-7'>
        <p className='text-md tracking-widest uppercase text-red-400 mx-7 mb-48'>
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
          tabDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Pretium fusce id velit ut tortor. Proin nibh nisl condimentum id. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Gravida neque convallis a cras semper auctor neque vitae. Neque convallis a cras semper auctor. Pellentesque nec nam aliquam sem et tortor consequat id. Libero nunc consequat interdum varius sit. Ultricies lacus sed turpis tincidunt id aliquet risus. Feugiat in fermentum posuere urna. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Fermentum posuere urna nec tincidunt praesent semper. Suspendisse faucibus interdum posuere lorem.'
          moreTabDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Pretium fusce id velit ut tortor. Proin nibh nisl condimentum id. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Gravida neque convallis a cras semper auctor neque vitae. Neque convallis a cras semper auctor. Pellentesque nec nam aliquam sem et tortor consequat id. Libero nunc consequat interdum varius sit. Ultricies lacus sed turpis tincidunt id aliquet risus. Feugiat in fermentum posuere urna. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Fermentum posuere urna nec tincidunt praesent semper. Suspendisse faucibus interdum posuere lorem.'
        />
        <ProjectCard
          title='Portfolio (this site)'
          description='A web portfolio hosted on Vercel using Next JS, Tailwind CSS, with help from the Headless UI and Framer Motion libraries'
          sourceCodeLink='https://github.com/skyleilani/sky-portfolio'
          projectLink='https://sky-portfolio.vercel.app/'
          imgSrc={this_site}
          imgAlt='portfolio_img'
          tabDescription=''
          moreTabDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Pretium fusce id velit ut tortor. Proin nibh nisl condimentum id. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Gravida neque convallis a cras semper auctor neque vitae. Neque convallis a cras semper auctor. Pellentesque nec nam aliquam sem et tortor consequat id. Libero nunc consequat interdum varius sit. Ultricies lacus sed turpis tincidunt id aliquet risus. Feugiat in fermentum posuere urna. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Fermentum posuere urna nec tincidunt praesent semper. Suspendisse faucibus interdum posuere lorem.'
        />
      </div>
    </div>
  );
};
export default projects;
