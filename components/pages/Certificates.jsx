import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cert from '../../public/certificate.png';

const Certificates = () => {
  return (
    <div className='w-full h-screen flex items-center' id='certificates'>
      <div className='ml-10 max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 justify-center'>
        <div className='cursor-pointer shadow-lg rounded-xl'>
          <Link href='https://www.credential.net/e5510156-6717-4372-abf3-0640bfceae8d#gs.kmcob6'>
            <Image
              src={cert}
              width={500}
              height={500}
              className='rounded-xl hover:shadow-xl'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Certificates;
