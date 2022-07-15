import styled from "styled-components";

import LogoSVG from "../img/icons/Header/stoneLogo.svg";

const StyledLogo = styled.div`
    padding: 10px 0;
`;


const Logo = (props) => {
    return (
        <StyledLogo {...props}>
            <a href="#Home">
                <img src={LogoSVG} alt="Stone Logo" />
            </a>
        </StyledLogo>
    );
}
export default Logo;