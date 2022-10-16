import styled from 'styled-components';

import Container from '../Container/Container';

const StyledCallToAction = styled.section`
  padding: 127px 0;
  margin: 0 auto;
  background: ${({ imgPath }) =>
    `url(${imgPath}) center center / cover no-repeat`};
  width: 100vw;
  & h3 {
    font-family: 'Roboto Condensed';
    font-size: 47px;
    line-height: 55px;
    color: ${({
      theme: {
        colors: { neutralLight },
      },
    }) => neutralLight};
    ::after {
      content: '';
      display: block;
      position: relative;
      width: 60px;
      height: 2px;
      top: 23px;
      background: ${({
        theme: {
          colors: { neutralLight },
        },
      }) => neutralLight};
    }
  }
`;

const CallToAction = ({ title, imgPath, children }) => {
  return (
    <StyledCallToAction imgPath={imgPath} {...children}>
      <Container>
        <h3>{title}</h3>
      </Container>
    </StyledCallToAction>
  );
};
export default CallToAction;
