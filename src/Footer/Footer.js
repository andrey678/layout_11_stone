import styled from 'styled-components';

import { useState } from 'react';

import Container from '../Container/Container';
import FooterInnerWrapper from './FooterInnerWrapper/FooterInnerWrapper';
import CompanySet from './CompanySet/CompanySet';
import ContactButton from './ContactButton/ContactButton';
import ContactFormWrapper from './ContactFormWrapper/ContactFormWrapper';
import ContactForm from './ContactForm/ContactForm';
import CompanyAddress from './CompanyAddress/CompanyAddress';

const StyledFooter = styled.footer`
  padding: 55px 0;
  width: 100vw;
  background: ${({
    theme: {
      colors: { neutralDark },
    },
  }) => neutralDark};
`;
const Footer = ({
  imgPath,
  year,
  companyName,
  buttonText,
  form,
  companyEmailLink,
  companyAddress,
  children,
}) => {
  // Состояние открытия/закрытия формы
  const [formOpen, setFormOpen] = useState(false);
  // Переключение состояния открытия формы
  const toggleShowForm = () => {
    setFormOpen(!formOpen);
  };
  return (
    <StyledFooter {...children}>
      <Container>
        <FooterInnerWrapper>
          <CompanySet imgPath={imgPath} year={year} companyName={companyName} />
          <ContactButton
            handleClick={toggleShowForm}
            buttonText={buttonText}
            companyEmailLink={companyEmailLink}
          />
          {formOpen && (
            <ContactFormWrapper>
              <ContactForm handleClick={toggleShowForm} form={form} />
            </ContactFormWrapper>
          )}
          <CompanyAddress companyAddress={companyAddress} />
        </FooterInnerWrapper>
      </Container>
    </StyledFooter>
  );
};
export default Footer;
