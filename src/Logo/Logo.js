import styled from "styled-components";

import LogoSVG from "../img/icons/Header/stoneLogo.svg";

const StyledLogo = styled.div`
align-self: center;
`;


const Logo = (props) => {
    return (
        <StyledLogo {...props}>
            <a href="#">
                <img src={LogoSVG} alt="Stone Logo" />
            </a>
        </StyledLogo>

    );
}
export default Logo;