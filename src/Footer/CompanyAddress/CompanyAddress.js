import styled from 'styled-components';

const StyledCompanyAddress = styled.p`
  font-family: 'Roboto Condensed';
  font-size: 13px;
  line-height: 20px;
  text-align: right;
  color: ${({
    theme: {
      colors: { footerTextColor },
    },
  }) => footerTextColor};
`;

const CompanyAddress = ({ companyAddress }) => (
  <StyledCompanyAddress>{companyAddress}</StyledCompanyAddress>
);
export default CompanyAddress;
