import React from 'react';

import Navbar from 'components/Navbar';
import { Container, Header } from './styles';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Container>
        <Header>Seus projetos</Header>
      </Container>
    </>
  );
}