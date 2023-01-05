import React from 'react';
import '../../styles/Home.module.css';
import Image from 'next/image';
import plant_img from '../../public/fractal_plant3.png';

const About = () => {
  return (
    <div className='h-max min-h-screen'>
      <div className='w-full' id='about'>
        <h3 className='text-md tracking-widest uppercase text-red-400 mx-10 mb-20 py-7'>
          Background{' '}
        </h3>
        <div className='w-full min-h-screen h-max p-2 flex pb-10 justify-center'>
          <div className='max-w-[1240px] md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 shadow-xl rounded-md p-10 ml-10 mb-32 bg-stone-100'>
              <p>
                {' '}
                {`Hey, I'm Sky!`}
                <br />
                {` I'm a developer with a passion for languages and the patterns they exhibit.`}{' '}
                <br />
                <br />{' '}
                {`I'm particularly interested in the connection between human languages and their programmatic counterparts, and the influence that human emotion and thought patterns have on natural design. I find it fascinating that code allows us to explore the intersection of natural and technological design.`}
                <br />
                <br />
                {`I received my degree in Robotics Technology and Japanese Language from Bennington College in 2022. Since then, I have been working in customer service and education while also working towards my Comptia Security+ certificate and building my web development skills.`}
              </p>
              <h2 className='hidden text-xl italic py-7'>{`What I'm Up To`}</h2>
            </div>
            <div className='mb-20 hidden md:block '>
              <Image
                src={plant_img}
                width={300}
                height={300}
                className='mt-20 '
                alt='fractal_broc'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
