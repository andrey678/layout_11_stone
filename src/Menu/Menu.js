import styled from "styled-components";

import MenuItem from '../MenuItem/MenuItem';

const menuOptions = ['Home', 'Work', 'Contact'];



const links = menuOptions.map(option => <MenuItem key={option}><a href={`#${option}`}>{option}</a></MenuItem>);

export const StyledMenu = styled.nav`
    & ul {
        display: flex;
        flex-direction: row;

    }
`;

const Menu = (props) => {
    return (
        <StyledMenu {...props}>
            <ul>
                {links}
            </ul>
        </StyledMenu>
    );
}
export default Menu;