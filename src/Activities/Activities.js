import styled from 'styled-components';

import Container from '../Container/Container';
import ActivitiesInnerWrapper from './ActivitiesInnerWrapper/ActivitiesInnerWrapper';
import ServiceItem from './ServiceItem/ServiceItem';

const StyledActivities = styled.section`
  padding: 80px 0;
  width: 100vw;
  margin: 0 auto;
  background: ${({
    theme: {
      colors: { neutralLight },
    },
  }) => neutralLight};
`;

const Activities = ({ items, children }) => {
  const services = items.map((service) => (
    <ServiceItem key={service.title} {...service} />
  ));
  return (
    <StyledActivities {...children}>
      <Container>
        <ActivitiesInnerWrapper>{services}</ActivitiesInnerWrapper>
      </Container>
    </StyledActivities>
  );
};

export default Activities;
