import styled from 'styled-components';
import Container from '../Container/Container';
import Staff from './Staff/Staff';
import TeamWrapper from './TeamWrapper/TeamWrapper';

const StyledTeam = styled.section`
  width: 100vw;
  padding: 80px 0;
  margin: 0 auto;
  background: ${({
    theme: {
      colors: { teamBackgroundColor },
    },
  }) => teamBackgroundColor};
  & h4 {
    padding-left: 10px;
    font-family: 'Roboto Condensed';
    font-size: 30px;
    line-height: 27px;
    color: ${({
      theme: {
        colors: { neutralTextColor },
      },
    }) => neutralTextColor};
  }
`;

const Team = ({ title, members, children }) => {
  return (
    <StyledTeam {...children}>
      <Container>
        <TeamWrapper>
          <h4>{title}</h4>
          <Staff members={members} />
        </TeamWrapper>
      </Container>
    </StyledTeam>
  );
};
export default Team;
