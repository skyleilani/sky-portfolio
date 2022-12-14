import React from 'react';
import '../../styles/Home.module.css';

const About = () => {
  return (
    <div
      className='w-full h-screen p-2 flex items-center text-center py-16'
      id='about'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 '>
        <div className='col-span-2'>
          <p>About</p>
          <h3 className='text-xl italic py-7'>Who I am </h3>
          <p>
            {' '}
            Hey, I'm Sky Leilani. My passion for web development originates from
            a deep-seeded curiosity surrounding language. The last 7 years of my
            life has been dedicated to exploring the connection between spoken &
            written languages, and their programmatic counterparts. I've always
            been incredibly intruiged by the influence human emotion and thought
            patterns have on natural design, and how that can be translated
            regarding the design of applications.
          </p>
          <h2 className='text-xl italic py-7'>What I'm Up To</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
