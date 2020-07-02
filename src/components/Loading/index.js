import React from 'react';
import loading from 'assets/loading.svg';

import { Container } from './styles';

const Loading = () => (
  <Container>
    <img src={loading} alt="Loading" />
  </Container>
);

export default Loading;
