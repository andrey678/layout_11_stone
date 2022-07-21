import styled, { css } from 'styled-components';

// Стили полосок
const stripesStyles = css`
  background: ${(props) => props.theme.colors.neutralLight};
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0px;
  transition: all 0.3s ease 0s;

  ${(props) =>
    props.menuOpen &&
    css`
      background: ${(props) => props.theme.colors.neutralDark};
    `}
`;

const StyledMenuBurgerButton = styled.button`
  display: none;
  border: none;
  background: none;
  @media ${(props) => props.theme.media.tablet} {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;

    & span {
      ${stripesStyles};
      top: 9px;

      ${(props) =>
        props.menuOpen &&
        css`
          transform: scale(0);
        `}
    }

    &::before,
    &::after {
      content: '';
      ${stripesStyles};
    }

    &::before {
      top: 0;
      ${(props) =>
        props.menuOpen &&
        css`
          transform: rotate(45deg);
          top: 9px;
        `}
    }

    &::after {
      bottom: 0;
      ${(props) =>
        props.menuOpen &&
        css`
          transform: rotate(-45deg);
          bottom: 9px;
        `}
    }

    ${(props) =>
      props.menuOpen &&
      css`
        z-index: 12;
      `};
  }
`;

const MenuBurgerButton = (props) => {
  return (
    <StyledMenuBurgerButton {...props}>
      <span></span>
    </StyledMenuBurgerButton>
  );
};
export default MenuBurgerButton;
