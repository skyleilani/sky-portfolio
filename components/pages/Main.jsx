import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <main className='w-full h-screen text-center'>
      <div className='max-w[1240px] w-full h-full flex justify-center items-center'>
        <div className='mb-20'>
          <p className='uppercase text-md tracking-widest text-gray-600'>
            Let's <span className='text-green-500'>Grow</span> Together
          </p>
          <h1 className='py-4 text-gray-700 '> Hi, I'm </h1>
          <span id={styles.color_animation} className='text-4xl tracking-wide '>
            {' '}
            Sky Leilani
          </span>
          <br />
          <h1 className='mt-5 pt-2  text-gray-700'>
            A curious, passion-driven developer,
          </h1>
          <p className='text-gray-600 max-w-[70%] m-auto'>
            <br />
            focused on creating human-centered designs, and thoughtful
            solutions.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
            <Link
              href='https://github.com/skyleilani'
              className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <FaGithub />
            </Link>
            <div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
