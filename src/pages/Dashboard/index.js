import React from 'react';

import Navbar from 'components/Navbar';
import { Header } from './styles';
import { Container, Row, Col12, Col8, Col4, Separator } from 'components/Grid/styles';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col12>
            <Header>Seus projetos</Header>
          </Col12>
        </Row>
        <Row>
          <Col8>search</Col8>
          <Col4>novo projeto</Col4>
        </Row>
        <Separator />
      </Container>
    </>
  );
}