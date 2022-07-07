import styled from "styled-components";

import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import SocialMenu from "../SocialMenu/SocialMenu";

const StyledHeader = styled.header`
    background: ${props => props.background || props.theme.colors.darkBrown};
    width: 100%;
    height: 60px;
   
`;

const Header = (props) => {
    return (

        <StyledHeader {...props}>
            <Container maxWidth={"940px"}>
                <Flex height={'100%'} justify="space-between">
                    <Flex>
                        <Logo />
                        <Menu />
                    </Flex>
                    <SocialMenu />
                </Flex>

            </Container>
        </StyledHeader >

    );
}

export default Header;