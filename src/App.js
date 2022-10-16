import Activities from './Activities/Activities';
import CallToAction from './CallToAction/CallToAction';
import Header from './Header/Header';
import Hero from './Hero/Hero';

const App = (props) => {
  const { header, hero, activities, callToAction } = props.data;
  return (
    <>
      <Header {...header} />
      <Hero {...hero} />
      <Activities {...activities} />
      <CallToAction {...callToAction} />
    </>
  );
};

export default App;
