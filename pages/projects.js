import React from 'react';
import Image from 'next/image';
import { tf } from '../public/tf.png';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';

const projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[11240px] mx-autho px-2 py-16'>
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
            img='/../public/tf.png'
          />
        </div>
      </div>
    </div>
  );
};
export default projects;
