import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import useMeasure from 'react-use-measure';
import { motion, MotionConfig } from 'framer-motion';

// CertCard displays a card for each certificate
const CertCard = ({
  title,
  description,
  src,
  alt,
  subtitle,
  company,
  preview,
}) => {
  // open more content
  let [open, setOpen] = useState(false);

  // ref and height are used to measure the height of the div element
  // that changes when the user wants to open the content
  let [ref, { height }] = useCallback(useMeasure, [])();

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <div className='mx-auto  w-full max-w-sm border border-zinc-500 pt-8 rounded-xl shadow-lg hover:shadow-xl'>
        <h1 className='mb-8 text-center text-3xl font-thin'>{title}</h1>

        {/* open content button container */}
        <div
          className='mb-8 flex justify-center px-8'
          style={{ fontSize: 'calc(1rem + 0.2 * (100vw - 20rem) / 20)' }}
        >
          {/* change text depending on state of open */}
          {open ? (
            <button className='border px-2 py-1' onClick={() => setOpen(!open)}>
              {' '}
              See Less{' '}
            </button>
          ) : (
            <button
              className='border rounded-md px-2 py-1'
              onClick={() => setOpen(!open)}
            >
              {' '}
              See More{' '}
            </button>
          )}
        </div>

        {/* This is the part dependent on if you want to see more content or not  */}
        <motion.div animate={{ height }} className='overflow-hidden'>
          <div ref={ref} className='px-8 pb-8'>
            {open ? (
              <div>
                <Link href={preview}>
                  <Image
                    src={src}
                    width={500}
                    height={500}
                    alt={alt}
                    className='cursor-pointer'
                  />
                  <p className='mt-5'>{description}</p>
                </Link>
              </div>
            ) : (
              <div className='text-center'>
                <p className='mb-3 italic '>{company}</p>
                <p className='mb-5 italic'>{subtitle}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default CertCard;
