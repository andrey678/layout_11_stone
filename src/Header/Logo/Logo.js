import styled from 'styled-components';

const StyledLogo = styled.div`
  padding: 10px 0;
`;

const Logo = ({ logoImg, children }) => {
  return (
    <StyledLogo {...children}>
      <a href='#Home'>
        <img src={logoImg} alt='Stone Logo' />
      </a>
    </StyledLogo>
  );
};
export default Logo;
