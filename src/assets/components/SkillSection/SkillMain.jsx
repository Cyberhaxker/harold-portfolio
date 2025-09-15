import React from 'react'
import SkillText from './SkillText';
import AllSkill from './AllSkill';
import SkillSection from './SkillSection';
import { SkillGradient } from './SkillGradient';

const SkillMain = () => {
  return (
  <div id='skills'>
    <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
    <SkillText />
     <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] w-full ml-2 lg:block sm:hidden'>
        <AllSkill />
      </div>
      <div className='sm:block lg:hidden'>
        <SkillSection/>
        <SkillGradient/>
      </div>
    </div>
  </div>);
};

export default SkillMain;