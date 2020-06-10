import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { MDBInput } from 'mdbreact';
import { motion } from 'framer-motion';

import { authHeader } from '_helpers/auth-header';
import { config } from 'config';

import { CardProjeto } from 'components/Card';
import Modal from 'components/Modal';

import { Header } from './styles';
import { Container, Row, Col12, Col8, Col4, Separator } from 'components/Grid/styles';

export default function Dashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(`${config.API_URL}/projects`, { headers: authHeader() })
      .then((res) => {
        setData(data.concat(res.data));
      })
      .catch(function () {
        // handle error
      });
  }, [data]);

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
          <Col8>
            <MDBInput label="Material input" />
          </Col8>
          <Col4>novo projeto</Col4>
        </Row>
        <Separator />
        <Row>
          {data.map(({id, title, description}) =>
            <CardProjeto key={id} title={title} description={description} />
          )}
        </Row>
      </Container>
    </motion.div>
  );
}