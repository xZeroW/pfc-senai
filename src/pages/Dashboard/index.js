import React from 'react';
import { motion } from 'framer-motion';

import { CardProjeto } from 'components/Card';

import { Header } from './styles';
import { Container, Row, Col12, Col8, Col4, Separator } from 'components/Grid/styles';

import { loadProjetos } from 'api';

export default function Dashboard() {

  const data = loadProjetos();

  const pageTransitions = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: '-100%'
    }
  };

  return (
    <motion.div
      initial='out'
      exit='out'
      animate='in'
      variants={pageTransitions}
    >
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
    </motion.div>
  );
}