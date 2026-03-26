import Hero from './components/Hero';
import TopCourses from './components/TopCourses';
import Destinations from './components/Destinations';
import Scholarships from './components/Scholarships';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ProofGallery from './components/ProofGallery';
import Stats from './components/Stats';
import NewZealandUSP from './components/NewZealandUSP';
import Alumni from './components/Alumni';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TopCourses />
      <Destinations />
      <Testimonials />
      <Scholarships />
      <Services />
      <Process />
      <ProofGallery />
      <Stats />
      <NewZealandUSP />
      <Alumni />
      <Contact />
    </>
  );
}
