import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
  return (
    <main className='w-full min-h-screen h-max mt-52 text-center inset-y-1/2'>
      <div className='max-w[1240px] w-full h-full flex justify-center items-center'>
        <div className='mb-20'>
          <p className='uppercase text-md tracking-widest text-gray-600'>
            {`Let's `}
            <span className='text-green-500'>Grow</span> Together
          </p>
          <h1 className='py-4 text-gray-700 '> {`Hi, I'm `}</h1>
          <span id={styles.color_animation} className='text-4xl tracking-wide '>
            {' '}
            Sky Leilani
          </span>
          <br />
          <h1 className='mt-5 pt-2  text-gray-700'>
            A self-motivated and passionate developer,
          </h1>
          <p className='text-gray-600 max-w-[70%] m-auto'>
            <br />
            dedicated to learning and creating human-centered designs, and
            thoughtful solutions.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-5 my-5'>
            <Link
              href='https://www.linkedin.com/in/sky-l-199951203/'
              className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <FaLinkedinIn />
            </Link>

            <a
              href='https://github.com/skyleilani'
              className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <FaGithub />
            </a>

            <Link
              href='mailto:skyleilani@bennington.edu'
              className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <AiOutlineMail />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
