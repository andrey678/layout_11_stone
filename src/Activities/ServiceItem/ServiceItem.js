import styled from 'styled-components';

const StyledServiceItem = styled.div`
  width: 313px;
  padding: 22px 10px 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({
    theme: {
      colors: { neutralTextColor },
    },
  }) => neutralTextColor};
  & h2 {
    font-family: 'Roboto Condensed';
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 23px;
  }
  & img {
    margin-bottom: 41px;
  }
  & p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    max-width: 287px;
  }
`;

const ServiceItem = ({ title, imgPath, text }) => {
  return (
    <StyledServiceItem>
      <h2>{title}</h2>
      <img src={imgPath} alt={title} />
      <p>{text}</p>
    </StyledServiceItem>
  );
};
export default ServiceItem;
