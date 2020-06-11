import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { MDBInput } from 'mdbreact';
import { motion } from 'framer-motion';

import { authHeader } from '_helpers/auth-header';
import { config } from 'config';

import { CardProjeto } from 'components/Card';
import Modal from 'components/Modal';

import { Header } from './styles';
import { Container, Row, Col12, Col4, Separator, Col3 } from 'components/Grid/styles';
import { BtnRoxo } from 'components/Button/styles';

export default function Project(props) {

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(`${config.API_URL}/tasks/${props.match.params.id}`, { headers: authHeader() })
      .then((res) => {
        setData(data.concat(res.data));
      })
      .catch(function () {
        // handle error
      });
  }, []);

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
      { showModal && <Modal projectId={props.match.params.id} showModal={showModal} setShowModal={setShowModal} />}
      <Container>
        <Row>
          <Col12>
            <Header>Nome do projeto</Header>
          </Col12>
        </Row>
        <Row>
          <Col4>
            <MDBInput />
          </Col4>
          <Col4 />
          <Col3><BtnRoxo onClick={() => setShowModal(!showModal)}>Nova tarefa</BtnRoxo></Col3>
        </Row>
        <Separator />
        <Row>
          {data.map(({id, title, description}) =>
            <CardProjeto key={id} id={id} title={title} description={description} />
          )}
        </Row>
      </Container>
    </motion.div>
  );
}