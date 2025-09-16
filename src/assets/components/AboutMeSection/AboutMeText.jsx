import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center mt-4'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white'> 
        I'm Harold G. Muchenje. I am an aspiring Data science engineer or Data Scientist with a strong passion of building advanced inteligent computer systems or 
        advanced inteligent information systems to solve variouse real world problems.
        I am the person who is driven by creativity, hard work and innovation. With a strong focus on delivering high-quality solutions 
        that meet the needs of users and businesses alike.2027,I will graduate with a BSc Honors Degree in Data science and informatics from the Midlands State University Gweru in Zimbabwe.
        So far, I have honed my skills in data science, machine learning and software development.
        </p>
        <div
           className='w-[320px] h-[320px] flex justify-around py-8 items-center gap-4 bt-2 relative'
        > 
          <div>
          <img src="images/msu.jpeg" className='border border-cyan rounded-[20px] object-cover bg-darkCyan hover:shadow-orangeShadow' alt="msu" />
          </div>
          <div>
          <img src="images/ibm.png"  className='border border-cyan rounded-[20px] object-cover bg-darkCyan hover:shadow-orangeShadow' alt="ibm" />
          </div>
          <div>
          <img src="images/hackthebox.png" className="border border-cyan rounded-[20px] object-cover bg-darkCyan hover:shadow-orangeShadow" alt="htb" />
          </div>
          </div>
    </div>
  );
};

export default AboutMeText;