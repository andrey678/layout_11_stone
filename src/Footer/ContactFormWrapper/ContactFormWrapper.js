import styled from 'styled-components';

const StyledContactFormWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({
    theme: {
      colors: { footerFormBackgroundColor },
    },
  }) => footerFormBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContactFormWrapper = (props) => <StyledContactFormWrapper {...props} />;
export default ContactFormWrapper;
