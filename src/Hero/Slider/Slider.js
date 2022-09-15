import { useState, useEffect, useMemo, useRef } from 'react';

import styled from 'styled-components';
import Slide from '../Slide/Slide';

const StyledSlider = styled.div`
  /* max-width: 100vw; */
  /* height: 100vh; */
  position: relative;
  left: 0;
  display: flex;
  transition: left 1s ease-out 0s;
`;

const Slider = ({ slides }) => {
  const sliderElem = useRef();

  // Ширина полосы слайдера
  const sliderWidth = useMemo(() => {
    const sliderWidth = document.documentElement.clientWidth * slides.length;
    return sliderWidth;
  }, [slides.length]);
  // Ширина окна(слайда)
  const windowWidth = useMemo(() => {
    const windowWidth = document.documentElement.clientWidth;
    return windowWidth;
  }, []);
  // const leftScroll = sliderElem.current.scrollLeft;
  const [leftOffset, setLeftOffset] = useState(0);
  console.log(windowWidth);

  useEffect(() => {
    sliderElem.current.style.width = sliderWidth + 'px';
  }, [sliderWidth]);
  useEffect(() => {
    const interval = setInterval(() => {
      let step = parseInt(windowWidth);
      // console.log(sliderElem.current.scrollLeft + 1);
      setLeftOffset(parseInt(leftOffset) - step + 'px');
      sliderElem.current.style.left = leftOffset;
      if (parseInt(leftOffset) == -(sliderWidth - windowWidth))
        setLeftOffset(0);
      console.log(leftOffset);
      // sliderElem.current.scrollLeft += step + 'px';
    }, 3000);
    return () => clearInterval(interval);
  }, [leftOffset, windowWidth, sliderWidth]);

  const slideshow = slides.map((slide, slideIndex) => (
    <Slide key={slideIndex} {...slide} />
  ));

  return <StyledSlider ref={sliderElem}>{slideshow}</StyledSlider>;
};
export default Slider;
