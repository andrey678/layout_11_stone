import styled from 'styled-components';

const StyledQuotesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const QuotesWrapper = (props) => <StyledQuotesWrapper {...props} />;

export default QuotesWrapper;
