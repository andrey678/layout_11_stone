import styled from 'styled-components';

const StyledActivitiesInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ActivitiesInnerWrapper = (props) => (
  <StyledActivitiesInnerWrapper {...props} />
);
export default ActivitiesInnerWrapper;
