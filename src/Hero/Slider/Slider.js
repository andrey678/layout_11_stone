import { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';
import Slide from '../Slide/Slide';
import DotsWrapper from '../DotsWrapper/DotsWrapper';

const StyledSlider = styled.div`
  position: relative;
  left: ${({ leftOffset }) => leftOffset};
  display: flex;
  flex-wrap: nowrap;
  transition: left 1s ease-out 0s;
`;

const Slider = ({ slides }) => {
  // Ссылка на полосу слайдера
  const sliderElem = useRef();
  // Сдвиг влево
  const [leftOffset, setLeftOffset] = useState(0);
  // Текущий слайд
  const [currentSlide, setCurrentSlide] = useState(0);
  // Ширина окна(слайда)
  const windowWidth = document.documentElement.clientWidth;
  // Ширина полосы слайдера
  const sliderWidth = windowWidth * slides.length;

  // Переход на слайд соответствующий точке по нажатию
  const goToSlide = (newSlideIndex) => {
    setCurrentSlide(newSlideIndex);
    setLeftOffset(-(newSlideIndex * windowWidth) + 'px');
  };

  useEffect(() => {
    // Динамическое изменение ширины полоcы слайдера
    const changeSliderWidth = () => {
      const sliderWidth = windowWidth * slides.length;
      sliderElem.current.style.width = sliderWidth + 'px';
    };
    changeSliderWidth();
    window.addEventListener('resize', changeSliderWidth);
    return () => window.removeEventListener('resize', changeSliderWidth);
  }, [sliderWidth, slides.length, windowWidth]);
  // Автоматический сдвиг влево полоcы слайдера по указанному интервалу времени

  useEffect(() => {
    const interval = setInterval(() => {
      // Размер шага по ширине окна
      let step = parseInt(windowWidth);
      // Текущий отступ слева
      let leftPosition = parseInt(leftOffset);
      // Последний слайд
      let lastSlide = slides.length - 1;
      // Значение текущего индекса(Переход к первому слайду после окончания полосы сладера)
      let slideIndex = currentSlide >= lastSlide ? 0 : currentSlide + 1;
      // Переход на другой слайд по индексу (окрашивание точки)
      setCurrentSlide(slideIndex);
      // Сброс сдвига в 0 при окончании полосы слайдера.
      if (leftPosition === -(lastSlide * step)) setLeftOffset(0);
      // Сдвиг полосы слайдера влево.
      setLeftOffset(-(slideIndex * step) + 'px');
    }, 3000);
    // очистка intervalID после рендеринга
    return () => clearInterval(interval);
  }, [currentSlide, leftOffset, windowWidth, sliderWidth, slides.length]);

  const slideshow = slides.map((slide) => <Slide key={slide.id} {...slide} />);

  return (
    <>
      <StyledSlider leftOffset={leftOffset} ref={sliderElem}>
        {slideshow}
      </StyledSlider>
      <DotsWrapper
        slides={slides}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
      />
    </>
  );
};
export default Slider;
