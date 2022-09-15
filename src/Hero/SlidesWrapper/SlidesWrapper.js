import styled from 'styled-components';

const StyledSlidesWrapper = styled.div`
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const SlidesWrapper = (props) => <StyledSlidesWrapper {...props} />;

export default SlidesWrapper;
