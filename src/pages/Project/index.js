import React from 'react';
import { motion } from 'framer-motion';

import { CardProjeto } from 'components/Card';

import { Header } from './styles';
import { Container, Row, Col12, Col8, Separator } from 'components/Grid/styles';

import { loadTarefas } from 'api';

export default function Project() {

  const data = loadTarefas();

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
            <Header>Titulo do projeto</Header>
          </Col12>
        </Row>
        <Row>
          <Col8>Procurar</Col8>
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