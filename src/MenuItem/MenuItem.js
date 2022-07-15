import styled from "styled-components";

export const StyledMenuItem = styled.li`
    border-left: 1px solid ${props => props.theme.colors.darkGray};

    &:last-child{
        border-right: 1px solid ${props => props.theme.colors.darkGray};;
    }
    
    & a {
        display: block;
        font-family: ${props => props.theme.fonts.robotoCondensedRegular};
        font-size: 15px;
        line-height: 60px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: ${props => props.color || 'white'};
        padding: 0 30px;
        height: 100%;

        &:hover{
            background: black;
            color: ${props => props.theme.colors.lightSand};
        }

        @media ${props => props.theme.media.tablet}{
            padding: 0 10px;
            border-radius: 25px;
            line-height: 40px;
            color: ${props => props.theme.colors.darkBrown};
            transition: background 0.2s ease 0s;

            &:hover{
                background: ${props => props.theme.colors.darkBrown};
            }
        }
    }
`;

const MenuItem = (props) => <StyledMenuItem {...props} />;

export default MenuItem;