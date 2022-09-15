import Header from './Header/Header';
import Hero from './Hero/Hero';

const App = (props) => {
  const { header, hero } = props.data;
  return (
    <>
      <Header {...header} />
      <Hero {...hero} />
    </>
  );
};

export default App;
