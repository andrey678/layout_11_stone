import Activities from './Activities/Activities';
import CallToAction from './CallToAction/CallToAction';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Team from './Team/Team';

const App = (props) => {
  const { header, hero, activities, callToAction, team } = props.data;
  return (
    <>
      <Header {...header} />
      <Hero {...hero} />
      <Activities {...activities} />
      <CallToAction {...callToAction} />
      <Team {...team} />
    </>
  );
};

export default App;
