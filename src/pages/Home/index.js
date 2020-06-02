import React from 'react';

import Navbar from 'components/Navbar';

import { Container } from 'components/Grid/styles';

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