import React from 'react';

import { Container } from 'components/Grid/styles';
import Navbar from 'components/Navbar';

export default function Home() {

  return(
    <>
      <Navbar />
      <Container>
        <h1>Home</h1>
      </Container>
    </>
  );
}