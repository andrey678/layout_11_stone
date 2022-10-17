import styled from 'styled-components';

const StyledSocialLink = styled.div`
  margin-right: 10px;
  max-height: 17px;
  transition: all 0.3s ease 0s;
  &:hover {
    transform: translateY(-4px);
  }
`;

const MemberSocialMediaLink = ({ name, url, linkIconPath, children }) => {
  return (
    <StyledSocialLink {...children}>
      <a href={url}>
        <img src={linkIconPath} alt={name} />
      </a>
    </StyledSocialLink>
  );
};
export default MemberSocialMediaLink;
