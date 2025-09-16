import React from 'react'
import { GrContactInfo } from 'react-icons/gr';
import ContactInfo from './ContactInfo';
import ContactSocial from './ContactSocial';

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img src="images/Binary.png" 
      alt="Contact Me"
      className='max-w-[200px]'
      />
    <ContactInfo />
    <ContactSocial />
    </div>
  );
};

export default ContactMeRight;