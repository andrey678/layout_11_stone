// Хуки
import { useState } from 'react';
// Стили
import styled from 'styled-components';
// Компоненты
import Container from '../Container/Container';
import Flex from '../Flex/Flex';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import MenuBurgerButton from './MenuBurgerButton/MenuBurgerButton';
import SocialMenu from './SocialMenu/SocialMenu';
import MenuWrapper from './MenuWrapper/MenuWrapper';

const StyledHeader = styled.header`
  position: fixed;
  background: ${(props) => props.background || props.theme.colors.neutralDark};
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Header = (props) => {
  // Состояние открытия/закрытия меню
  const [menuOpen, setMenuOpen] = useState(false);

  // Переключение состояния открытия меню и блокировки прокрутки старницы
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.toggleAttribute('lock');
  };

  return (
    <StyledHeader {...props}>
      <Container>
        <Flex height={'100%'} justify='space-between' zIndex='2' align='center'>
          <Logo />
          <MenuWrapper menuOpen={menuOpen}>
            <Menu />
            <SocialMenu />
          </MenuWrapper>
          <MenuBurgerButton menuOpen={menuOpen} onClick={toggleMenu} />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
