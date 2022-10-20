import Activities from './Activities/Activities';
import CallToAction from './CallToAction/CallToAction';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Team from './Team/Team';
import Testimonials from './Testimonials/Testimonials';

const App = (props) => {
  const { header, hero, activities, callToAction, team, testimonials, footer } =
    props.data;
  return (
    <>
      <Header {...header} />
      <Hero {...hero} />
      <Activities {...activities} />
      <CallToAction {...callToAction} />
      <Team {...team} />
      <Testimonials {...testimonials} />
      <Footer {...footer} />
    </>
  );
};

export default App;
