import styled from 'styled-components';

const StyledFooterInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterInnerWrapper = (props) => <StyledFooterInnerWrapper {...props} />;

export default FooterInnerWrapper;
