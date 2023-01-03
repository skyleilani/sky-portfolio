import React from 'react';

import CertCard from '../CertCard';
import cert from '../../public/cert.png';
import thm_cert from '../../public/thm_cert.png';

const Certificates = () => {
  const thm_descrip =
    'OSINT investigations, cyber defense, red teaming, secure coding, and IoT defense';

  const gymnasium_descrip = 'description';
  return (
    <div className='w-full min-h-screen h-max' id='certificates'>
      <p className='text-md tracking-widest uppercase text-red-400 mx-7 mb-56 pt-6'>
          Projects
        </p>
      <div className='flex items-center'>
      <div className='ml-10 max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 justify-center'>
        <CertCard
          title='Advent of Cyber'
          company='Try Hack Me'
          subtitle='basic cybersecurity'
          src={thm_cert}
          description={thm_descrip}
          preview='https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OM30QFAVUT.png'
          alt='thm_cert'
        />
        <CertCard
          title='Modern Web Design'
          company='Gymnasium'
          subtitle='Javascript, HTML, CSS'
          src={cert}
          description={gymnasium_descrip}
          preview='https://www.credential.net/e5510156-6717-4372-abf3-0640bfceae8d#gs.kmcob6'
          alt='gynmasium_cert'
        />
      </div>
    </div>
    </div>
  );
};
export default Certificates;
