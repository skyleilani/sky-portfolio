import React from 'react';
import '../../styles/Home.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <div className='w-full h-screen p-2 flexpy-16 items-center' id='about'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 justify-center'>
        <div className='col-span-2 shadow-xl rounded-xl p-10 ml-10'>
          <h3 className='text-xl italic py-7 '>Background </h3>
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
            src='https://c8.alamy.com/comp/BFEJXN/romanesco-broccoli-or-roman-cauliflower-on-a-white-background-BFEJXN.jpg'
            width={300}
            height={300}
            className='mt-20'
            alt='fractal_broccolii'
            onError={() => {
              setImgSrc(fallbackSrc);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
