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
  transition: background 0.8s ease-out 0s;
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
  return <StyledDot {...props}></StyledDot>;
};
export default Dot;
