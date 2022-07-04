import styled from "styled-components";
import Logo from "../img/icons/stoneLogo.svg";
import Container from "../Container/Container";

const StyledHeader = styled.header`
background: ${props => props.background || props.theme.colors.darkBrown};
width: 100%;
height: 60px;
padding: 10px 0;
`;

const Header = (props) => {
    return (

        <StyledHeader {...props}>
            <Container maxWidth={"940px"}>
                <a href="#">
                    <img src={Logo} alt="Stone Logo" />
                </a>
            </Container>
        </StyledHeader >

    );
}

export default Header;