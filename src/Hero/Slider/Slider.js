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
  // Ссылка на полосу слайдера
  const sliderElem = useRef();
  // Сдвиг влево
  const [leftOffset, setLeftOffset] = useState(0);

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
  console.log(windowWidth);
  // Динамическое изменение ширины полоы слайдера
  useEffect(() => {
    sliderElem.current.style.width = sliderWidth + 'px';
  }, [sliderWidth]);
  // Автоматический сдвиг влево полочы слайдера по указанному интервалу времени
  useEffect(() => {
    const interval = setInterval(() => {
      let step = parseInt(windowWidth);
      let leftPosition = parseInt(leftOffset);
      // Сдвиг
      setLeftOffset(leftPosition - step + 'px');
      sliderElem.current.style.left = leftOffset;
      // Переход к первому слайду после окончания полосы сладера
      if (leftPosition == -(sliderWidth - windowWidth)) setLeftOffset(0);
    }, 3000);
    return () => clearInterval(interval);
  }, [leftOffset, windowWidth, sliderWidth]);

  const slideshow = slides.map((slide, slideIndex) => (
    <Slide key={slideIndex} {...slide} />
  ));

  return <StyledSlider ref={sliderElem}>{slideshow}</StyledSlider>;
};
export default Slider;
