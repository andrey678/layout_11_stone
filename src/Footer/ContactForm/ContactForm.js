import styled from 'styled-components';

import CloseFormButton from '../CloseFormButton/CloseFormButton';

const StyledContactForm = styled.div`
  padding: 30px;
  width: 90%;
  max-width: 450px;
  display: block;
  position: relative;
  border-radius: 15px;
  background: ${({
    theme: {
      colors: { neutralLight },
    },
  }) => neutralLight};
  & form {
    display: flex;
    justify-content: center;

    fieldset {
      width: 90%;
      font-family: 'Roboto Condensed';
      font-size: 16px;
      line-height: 20px;
      color: ${({
        theme: {
          colors: { neutralTextColor },
        },
      }) => neutralTextColor};
      legend {
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1.5px;
        margin-bottom: 20px;
      }
      label {
        display: flex;
        flex-direction: column;

        margin-bottom: 10px;
        line-height: 25px;
      }
      input,
      textarea {
        width: 100%;
        font-size: 14px;
        padding: 5px;
        border-radius: 4px;
      }
      textarea {
        margin-bottom: 15px;
      }
      button {
        padding: 6px 15px;
        font-size: 16px;
        line-height: 20px;
        text-transform: uppercase;
        border-radius: 5px;
        background: ${({
          theme: {
            colors: { neutralDark },
          },
        }) => neutralDark};
        color: ${({
          theme: {
            colors: { neutralLight },
          },
        }) => neutralLight};
        transition: all 0.3s ease 0s;
        &:hover {
          opacity: 0.8;
        }
        &:active {
          transform: translateY(4px);
        }
      }
    }
  }
`;
const ContactForm = ({ form, children, handleClick = (f) => f }) => {
  const { closeImgPath } = form;
  return (
    <StyledContactForm {...children}>
      <CloseFormButton handleClick={handleClick} closeImgPath={closeImgPath} />
      <form action='#'>
        <fieldset>
          <legend>Contact Form</legend>
          <label>
            Имя
            <input type='text' placeholder='Type your name' required />
          </label>
          <label>
            E-mail
            <input type='email' placeholder='Type your email' required />
          </label>
          <label>
            Message
            <textarea type='text' placeholder='Type your message...' required />
          </label>
          <button type='submit' value='Send'>
            Send
          </button>
        </fieldset>
      </form>
    </StyledContactForm>
  );
};
export default ContactForm;
