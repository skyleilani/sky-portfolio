import React from 'react';

import CertCard from '../CertCard';
import cert from '../../public/cert.png';
import thm_cert from '../../public/thm_cert.png';

const Certificates = () => {
  const thm_descrip =
    'OSINT investigations, cyber defense, red teaming, secure coding, and IoT defense';

  const gymnasium_descrip = 'used basic HTML, CSS, and JavaScript to build a wiki site on Yagi Uda antennas ';
  return (
    <div className='w-full min-h-screen h-max' id='certificates'>
      <p className='text-md tracking-widest uppercase text-red-400 mx-7 mb-56 pt-6'>
        Certificates
      </p>
        <div className='ml-5 m-auto flex flex-row items-center'>
          <CertCard
            title='Advent of Cyber'
            company='Try Hack Me'
            subtitle='Introduction to Cybersecurity'
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
  );
};
export default Certificates;
