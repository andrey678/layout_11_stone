import styled from "styled-components";

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'stretch'};
    align-items: ${props => props.align || 'stretch'};
    height: ${props => props.height || 'inherit'};
    z-index: ${props => props.zIndex || 'initial'};
  
`;


const Flex = (props) => {
    return(
        <StyledFlex {...props} />
    );
} 
export default Flex;