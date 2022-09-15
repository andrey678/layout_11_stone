// import { useState } from 'react';
import styled, { css } from 'styled-components';

const StyledDot = styled.div`
  width: 9px;
  height: 9px;
  margin-right: 6px;
  background: ${({
    theme: {
      colors: { heroSliderDotColor },
    },
  }) => heroSliderDotColor};
  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }
  ${(props) =>
    props.dotActive &&
    css`
      background: ${({
        theme: {
          colors: { heroActiveSliderDotColor },
        },
      }) => heroActiveSliderDotColor};
    `}
`;

const Dot = (props) => {
  //   const [dotActive, setDotActive] = useState(false);

  return <StyledDot {...props}></StyledDot>;
};
export default Dot;
