import styled from 'styled-components';

import Dot from '../Dot/Dot';

const StyledDotsWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 50%;
  bottom: 21px;
  transform: translateX(-50%);
`;

const DotsWrapper = ({ slides }) => {
  const dots = slides.map((dot, dotIndex) => <Dot key={dotIndex} />);
  return <StyledDotsWrapper>{dots}</StyledDotsWrapper>;
};
export default DotsWrapper;
