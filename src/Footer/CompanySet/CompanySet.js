import styled from 'styled-components';

const StyledCompanySet = styled.div`
  display: flex;
  align-items: center;
  & img {
    margin-right: 8px;
  }
  & p {
    font-family: 'Roboto Condensed';
    font-size: 14px;
    line-height: 20px;

    color: ${({
      theme: {
        colors: { footerTextColor },
      },
    }) => footerTextColor};
  }
`;
const CompanySet = ({ imgPath, year, companyName, children }) => {
  return (
    <StyledCompanySet {...children}>
      <img src={imgPath} alt={companyName + 'logo'} />
      <p>
        {year} {companyName}
      </p>
    </StyledCompanySet>
  );
};

export default CompanySet;
