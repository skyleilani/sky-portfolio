import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ title, img, src, tech, preview }) => {
  var formattedTech = tech.split(',').join('\n');
  return (
    <div className='relative flex justify-center shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-red-400 to-red-200 cursor-pointer '>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={img}
        alt='/'
        width={300}
        height={100}
      />
      <div className='hidden text-center group-hover:block absolute top-[50%] translate-x-[-50%] translate-y-[-50%] ml-36'>
        <h3 className='text-2xl text-white tracking-wider '>{title}</h3>
        <p className='text-white'>{formattedTech}</p>
        <Link href={src}>
          <p className='text-center py-1 rounded-lg bg-white text-gray-700 font-light text-lg cursor-pointer mt-5'>
            Source Code
          </p>
        </Link>
        <Link href={preview}>
          <p className='text-center py-1 rounded-lg bg-white text-gray-700 font-light text-lg cursor-pointer mt-5'>
            Preview
          </p>
        </Link>
      </div>
    </div>
  );
};
export default ProjectCard;
