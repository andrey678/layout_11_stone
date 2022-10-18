import styled from 'styled-components';

const StyledQuote = styled.div`
  max-width: 361px;
  & p {
    font-family: 'Vollkorn';
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 5px;
    color: ${({
      theme: {
        colors: { neutralTextColor },
      },
    }) => neutralTextColor};
  }
  & h2 {
    font-family: 'Roboto Condensed';
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: ${({
      theme: {
        colors: { neutralLight },
      },
    }) => neutralLight};
  }
`;

const Quote = ({ text, owner, children }) => {
  return (
    <StyledQuote {...children}>
      <p>{text}</p>
      <h2>{owner}</h2>
    </StyledQuote>
  );
};
export default Quote;
