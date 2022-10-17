import styled from 'styled-components';

import SocialLinksWrapper from '../SocialLinksWrapper/SocialLinksWrapper';
import MemberSocialMediaLink from '../MemberSocialMediaLink/MemberSocialMediaLink';

const StyledTeamMember = styled.div`
  max-width: 240px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  & img {
    margin-bottom: 10px;
  }
  & h5 {
    font-family: 'Roboto Condensed';
    font-size: 16px;
    line-height: 20px;
    color: ${({
      theme: {
        colors: { neutralTextColor },
      },
    }) => neutralTextColor};
  }
  & p {
    font-family: 'Vollkorn';
    font-size: 12px;
    line-height: 20px;
    color: ${({
      theme: {
        colors: { neutralTextColor },
      },
    }) => neutralTextColor};
    margin-bottom: 8.5px;
  }
`;
const TeamMember = ({
  photoPath,
  name,
  position,
  socialMediaLinks,
  children,
}) => {
  const links = socialMediaLinks.map((link) => (
    <MemberSocialMediaLink key={link.url} {...link} />
  ));
  return (
    <StyledTeamMember {...children}>
      <img src={photoPath} alt={name + ' photo'} />
      <h5>{name}</h5>
      <p>{position}</p>
      <SocialLinksWrapper>{links}</SocialLinksWrapper>
    </StyledTeamMember>
  );
};
export default TeamMember;
