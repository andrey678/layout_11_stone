import styled from 'styled-components';

const StyledContactButton = styled.button`
  flex: 0 1 300px;
  max-width: 300px;
  height: 40px;
  font-family: 'Roboto Condensed';
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: ${({
    theme: {
      colors: { neutralLight },
    },
  }) => neutralLight};
  background: ${({
    theme: {
      colors: { footerContactButtonColor },
    },
  }) => footerContactButtonColor};
  border: 2px solid
    ${({
      theme: {
        colors: { neutralLight },
      },
    }) => neutralLight};
  transition: all 0.3s ease 0s;
  &:hover {
    background: ${({
      theme: {
        colors: { neutralLight },
      },
    }) => neutralLight};
    color: ${({
      theme: {
        colors: { neutralDark },
      },
    }) => neutralDark};
  }
`;

const ContactButton = ({ buttonText, children, handleClick = (f) => f }) => {
  return (
    <StyledContactButton onClick={handleClick} {...children}>
      {buttonText}
    </StyledContactButton>
  );
};

export default ContactButton;
