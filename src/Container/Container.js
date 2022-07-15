import styled from "styled-components";

const StyledContainer = styled.div`
    max-width: ${props => props.maxWidth || "960px"};
    margin: 0 auto;
    padding: 0 10px;
`;

const Container = (props) => {
    return(
        <StyledContainer {...props} />
    );
}

export default Container;