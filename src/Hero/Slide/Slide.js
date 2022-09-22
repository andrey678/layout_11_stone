import styled from 'styled-components';

const StyledSlide = styled.div`
  width: 100vw;
  height: auto;
  background: ${(props) => `url('${props.imgPath}') 0 0/cover no-repeat`};
  padding: 67px;
  flex-shrink: 0;

  & h1 {
    font-family: 'Roboto Condensed';
    margin: 0 auto;
    max-width: 639px;
    font-size: 78px;
    line-height: 66px;
    text-align: center;
    text-transform: uppercase;
    color: ${({
      theme: {
        colors: { heroHeadingColor },
      },
    }) => heroHeadingColor || 'green'};
    /* margin-bottom: 56px; */
    &::after {
      content: '';
      display: block;
      margin: 36px auto 18px;
      width: 60px;
      height: 2px;
      background: ${({
        theme: {
          colors: { heroHeadingColor },
        },
      }) => heroHeadingColor || 'green'};
    }
  }
  & p {
    font-family: 'Vollkorn';
    font-style: normal;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 49px;
    color: ${({
      theme: {
        colors: { heroParagraphColor },
      },
    }) => heroParagraphColor || 'white'};
  }
  & button {
    display: block;
    padding: 17px 10px;
    margin: 0 auto;
    font-family: 'Roboto Condensed';
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    background: ${({
      theme: {
        colors: { heroButtonBackgroundColor },
      },
    }) => heroButtonBackgroundColor || 'white'};
    border: 2px solid
      ${({
        theme: {
          colors: { heroButtonBorderColor },
        },
      }) => heroButtonBorderColor || 'white'};
    color: ${({
      theme: {
        colors: { heroButtonTextColor },
      },
    }) => heroButtonTextColor || 'white'};
  }
`;
const Slide = ({ title, subtitle, buttonTitle, children, imgPath }) => {
  return (
    <StyledSlide imgPath={imgPath} {...children}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button>{buttonTitle}</button>
    </StyledSlide>
  );
};
export default Slide;
