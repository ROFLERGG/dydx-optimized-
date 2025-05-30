import CallToAction from '@/components/CallToAction';
import ApplicationProcess from './components/ApplicationProcess';
import Grants from './components/FeaturedGrants';
import Hero from './components/Hero';
import News from './components/News';
import Questions from './components/Questions';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col">
        <Grants />
        <News />
        <Questions />
        <ApplicationProcess />
        <CallToAction />
      </div>
    </>
  );
};

export default Home;
