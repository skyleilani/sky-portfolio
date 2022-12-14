import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react'; // smooth transition between tabs
import styles from '../styles/Home.module.css';

function NavBar() {
  const [isActive, setActive] = useState(false);

  return (
    <div className='shadow-sm w-full z-99  tracking-widest'>
      <nav>
        <div className=' flex h-20 w-full z-999 inset-0 '>
          {/* first block section outer part  */}
          <div className='fixed flex items mx-10 w-full justify-center'>
            {/* hiding tabs on small screens Y oh medium (md) a block */}
            <div className=' hidden md:block'>
              <div className='flex space-x-10 mt-5  tracking-widest'>
                <header
                  className='m-0 mt-2 leading-5 text-xl text-center font-sans'
                  id={styles.color_animation}
                >
                  <Link href='/'>Sky Leilani</Link>
                </header>

                <Link
                  href='#about'
                  activeClass='about'
                  to='/about'
                  className='cursor-pointer font-light px-3 py-2 text-md hover:text-red-400 hover:italic'
                >
                  About
                </Link>
                <Link
                  href='/certificates'
                  activeClass='Certificates'
                  to='certificates'
                  className='cursor-pointer font-light px-3 py-2 text-md hover:text-red-400 hover:italic'
                >
                  Certificates
                </Link>
                <Link
                  href='/projects'
                  activeClass='Projects'
                  to='projects'
                  className='cursor-pointer font-light px-3 py-2 text-md hover:text-red-400 hover:italic'
                >
                  Projects
                </Link>
              </div>
            </div>
            {/* responsive navbar for smaller screens */}
            <div className='mr-10 flex md:hidden'>
              <button
                onClick={() => setActive(!isActive)}
                type='button'
                className='inline-flex items-center justify-between p-2 rounded-md text-black hover:bg-red-400 hover:bg-opacity-0 focus:outline-none focus:ring-offset-2 focus:ring-offset-red-400 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'> Open main menu</span>
                {!isActive ? (
                  <svg
                    className='block h-8 w-8'
                    xmlns='http:www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-8 w-8'
                    xmlns='http:www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* headless ui for smoothness in mobile experience */}
        <Transition
          show={isActive}
          enter='transition ease-out duration-100 transform'
          enterForm='opacity-0 scale095'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveTo='opacity-0 scale-95'
        >
          {ref => (
            //handle mobile menu tabs
            <div className='md:hidden id=mobile-menu'>
              <div
                ref={ref}
                className='bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 ml-4'
              >
                <Link
                  href='../pages/about'
                  activeClass='about'
                  to='about'
                  className='cursor-pointer text-black hover:italic hover:text-red-400 block px-3 py-2 rounded-md text-base font-light ml-5'
                >
                  About
                </Link>
                <Link
                  href='/projects'
                  activeClass='projects'
                  to='projects'
                  className='cursor-pointer text-black  hover:text-red-400 hover:italic block px-3 py-2 rounded-md text-base font-light ml-5'
                >
                  Projects
                </Link>
                <Link
                  href='/certificates'
                  activeClass='certificates'
                  to='certificates'
                  className='cursor-pointer text-black hover:italic hover:text-red-400 block px-3 py-2 rounded-md text-base font-light ml-5'
                >
                  Certificates
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
export default NavBar;
