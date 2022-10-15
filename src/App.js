import Activities from './Activities/Activities';
import Header from './Header/Header';
import Hero from './Hero/Hero';

const App = (props) => {
  const { header, hero, activities } = props.data;
  return (
    <>
      <Header {...header} />
      <Hero {...hero} />
      <Activities {...activities} />
    </>
  );
};

export default App;
