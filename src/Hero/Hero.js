import styled from 'styled-components';

import Slider from './Slider/Slider';
import SlidesWrapper from './SlidesWrapper/SlidesWrapper';

const StyledHero = styled.section`
  padding: 60px 0 0 0;
`;
const Hero = ({ slides, children }) => {
  return (
    <StyledHero {...children}>
      <SlidesWrapper>
        <Slider slides={slides} />
      </SlidesWrapper>
    </StyledHero>
  );
};

export default Hero;
