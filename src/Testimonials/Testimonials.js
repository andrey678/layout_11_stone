import styled from 'styled-components';

import Container from '../Container/Container';
import QuotesWrapper from './QuotesWrapper/QuotesWrapper';
import Quote from './Quote/Quote';

const StyledTestimonials = styled.section`
  padding: 80px 0;
  width: 100vw;
  margin: 0 auto;
  background: ${({
    theme: {
      colors: { testimonialsBackgroundColor },
    },
  }) => testimonialsBackgroundColor};
  & h6 {
    font-family: 'Roboto Condensed';
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: ${({
      theme: {
        colors: { testimonialsHeadingColor },
      },
    }) => testimonialsHeadingColor};
    &::after {
      content: '';
      display: block;
      position: relative;
      margin: 0 auto 44px;
      top: 14px;
      width: 60px;
      height: 2px;
      background: ${({
        theme: {
          colors: { testimonialsStripeColor },
        },
      }) => testimonialsStripeColor};
    }
  }
`;

const Testimonials = ({ title, quotes, children }) => {
  const clientsQuotes = quotes.map((quote) => (
    <Quote key={quote.owner} {...quote} />
  ));
  return (
    <StyledTestimonials {...children}>
      <Container>
        <h6>{title}</h6>
        <QuotesWrapper>{clientsQuotes}</QuotesWrapper>
      </Container>
    </StyledTestimonials>
  );
};

export default Testimonials;
