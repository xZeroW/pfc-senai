import React from 'react';

import { CardProjeto } from 'components/Card';

import { Header } from './styles';
import { Container, Row, Col12, Col8, Col4, Separator } from 'components/Grid/styles';

import { loadProjetos } from 'api';

export default function Dashboard() {

  const data = loadProjetos();

  return (
    <>
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
        <Row>
          {data.map(({title, id, createdAt, description}) =>
            <CardProjeto key={id} title={title} id={id} createdAt={createdAt} description={description} />
          )}
        </Row>
      </Container>
    </>
  );
}