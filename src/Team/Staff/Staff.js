import styled from 'styled-components';

import TeamMember from '../TeamMember/TeamMember';

const StyledStaff = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
`;

const Staff = ({ members, children }) => {
  const team = members.map((teamMember) => (
    <TeamMember key={teamMember.name} {...teamMember} />
  ));
  return <StyledStaff {...children}>{team}</StyledStaff>;
};
export default Staff;
