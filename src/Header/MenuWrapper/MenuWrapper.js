import styled, { css } from 'styled-components';

const StyledMenuWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;

  @media ${(props) => props.theme.media.tablet} {
    display: block;
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.neutralLight};
    padding: 70px 0 0 0;
    transition: all 0.3s ease 0s;
    overflow: auto;

    ${(props) =>
      props.menuOpen &&
      css`
        top: 0;
      `}
  }
`;

const MenuWrapper = (props) => <StyledMenuWrapper {...props} />;

export default MenuWrapper;
