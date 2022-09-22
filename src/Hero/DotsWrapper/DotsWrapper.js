import styled from 'styled-components';
import { useRef } from 'react';
import Dot from '../Dot/Dot';

const StyledDotsWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 50%;
  bottom: 21px;
  transform: translateX(-50%);
`;

const DotsWrapper = ({ slides, currentSlide, goToSlide = (f) => f }) => {
  // Ссылка на точки управления
  const dotsElem = useRef();

  const dots = slides.map((_, dotIndex) => (
    <Dot
      key={dotIndex}
      dotActive={currentSlide == dotIndex}
      onClick={() => goToSlide(dotIndex)}
    />
  ));

  return <StyledDotsWrapper ref={dotsElem}>{dots}</StyledDotsWrapper>;
};
export default DotsWrapper;
