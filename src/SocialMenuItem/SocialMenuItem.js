import styled from "styled-components";

import { StyledMenuItem } from "../MenuItem/MenuItem";


const StyledSocialMenuItem = styled(StyledMenuItem)`
    & a{
        padding: 0 23px;
        & img{
            vertical-align: middle;
        }
    }
`;

const SocialMenuItem = (props) => <StyledSocialMenuItem {...props} />;

export default SocialMenuItem;