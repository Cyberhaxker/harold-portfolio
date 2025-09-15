import HeroGradient from './assets/components/HeroSection/HeroGradient';
import HeroMain from './assets/components/HeroSection/HeroMain';
import SubHeroSection from './assets/components/HeroSection/SubHeroSection';
import NavbarMain from './assets/components/navbar/NavbarMain';
import AboutMain from './assets/components/AboutMeSection/AboutMain';
import SkillMain from './assets/components/SkillSection/SkillMain';
import SubSkill from './assets/components/SkillSection/SubSkill';
import ContactMeMain from './assets/components/ContactSection/ContactMeMain';
import FooterMain from './assets/components/footer/FooterMain';

function App() {

  return ( <main className='font-body'>
    <NavbarMain />
    <HeroMain /> 
    <HeroGradient />
    <SubHeroSection />
    <AboutMain />
    <HeroGradient />
    <SkillMain />
    <SubSkill />
    <ContactMeMain/>
    <FooterMain />
  </main>);
}

export default App;
 