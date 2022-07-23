import styled from 'styled-components';

import MenuItem from '../MenuItem/MenuItem';

export const StyledMenu = styled.nav`
  & ul {
    display: flex;
    flex-direction: row;
    @media ${(props) => props.theme.media.tablet} {
      flex-direction: column;
      align-items: center;
      & li {
        border: none;
        &:last-child {
          border: none;
        }
      }
    }
  }
`;

const Menu = ({ options, children }) => {
  const links = options.map((option) => (
    <MenuItem key={option}>
      <a href={`#${option}`}>{option}</a>
    </MenuItem>
  ));
  return (
    <StyledMenu {...children}>
      <ul>{links}</ul>
    </StyledMenu>
  );
};
export default Menu;
