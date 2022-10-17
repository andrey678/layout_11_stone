import styled from 'styled-components';

const StyledTeamWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TeamWrapper = (props) => <StyledTeamWrapper {...props} />;

export default TeamWrapper;
