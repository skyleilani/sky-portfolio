import React from 'react';
import tf from '../../public/tf.png';
import ProjectCard from '../ProjectCard';

const projects = () => {
  return (
      <div className='w-full'>
          <div className='items-center'>
          <h1 className='uppercase text-md tracking-widest text-green-500'> Projects </h1>
              <span className='mb-4'> Updated as I learn  </span>
              </div>
    </div>
  );
};
export default projects;

{/*  <div className='max-w-[11240px] mx-auto px-2 py-16'>
        <p className='text-md tracking-widest uppercase text-red-400'>
          Projects
        </p>
        <h2 className='py-4 italic mb-2'> {`What I've Built`} </h2>
        <div className='grid sm:grid-cols-3 gap-10'>
          <ProjectCard
            title='Portfolio'
            tech='Next.js, React, TailwindCSS'
            src='https://github.com/skyleilani/equation-game-and-main-page-'
            preview='https://o41qk.csb.app/'
            img=''
          />
          <ProjectCard
            title='Equation Game'
            tech='React, CSS'
            src='https://github.com/skyleilani/equation-game-and-main-page-'
            preview='https://o41qk.csb.app/'
            img={tf}
          />
        </div>
      </div> */ }