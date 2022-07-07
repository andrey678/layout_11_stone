import styled from "styled-components";

export const StyledMenuItem = styled.li`
            
    border-left: 1px solid ${props => props.theme.colors.darkGray};
    &:last-child{
        border-right: 1px solid ${props => props.theme.colors.darkGray};;
    }
    
    & a {
        font-family: ${props => props.theme.fonts.robotoCondensedRegular};
        font-size: 15px;
        line-height: 60px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: ${props => props.color || 'white'};
        padding: 0 30px;
        height: 100%;
        display: block;
        &:hover{
            background: black;
            color: ${props => props.theme.colors.lightSand};
        }

        
    }
`;

const MenuItem = (props) => <StyledMenuItem {...props} />;

export default MenuItem;