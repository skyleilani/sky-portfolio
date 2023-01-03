import React from 'react';
import '../../styles/Home.module.css';
import Image from 'next/image';
import plant_img from '../../public/fractal_plant3.png';

const About = () => {
  return (
    <div className='w-full' id='about'>
      <h3 className='text-md tracking-widest uppercase text-red-400 mx-10 mb-20 py-7'>
        Background{' '}
      </h3>
      <div className='w-full h-full p-2 flex pb-10 justify-center'>
        <div className='max-w-[1240px] md:grid grid-cols-3 gap-8'>
          <div className='col-span-2 shadow-lg rounded-md p-10 ml-10 mb-32'>
            <p>
              {' '}
              {`Hey, I'm Sky,`}
              <br />
              {` a developer fascinated by languages and the awe-inspiring
            patterns they possess.`}{' '}
              <br />
              <br />{' '}
              {`I'm quite passionate about exploring the connection between
            human languages, and their programmatic counterparts. I've always
            been intrigued by the influence human emotion and thought patterns
            have on natural design. I love that code offers a way to explore the
            integration of natural and technological design.`}
              <br />
              <br />
              {`I studied Japanese Language and Robotics Technology at
            Bennington college from 2018-2022. Since my graduation I have been
            working jobs in customer service & education while I pursue the Comptia
            Security+ certificate and build my web development experience.`}
            </p>
            <h2 className='hidden text-xl italic py-7'>{`What I'm Up To`}</h2>
          </div>
          <div>
            <Image
              src={plant_img}
              width={300}
              height={300}
              className='mt-20'
              alt='fractal_broccolii'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
