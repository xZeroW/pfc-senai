import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { MDBInput } from 'mdbreact';

import { authHeader } from '_helpers/auth-header';
import { config } from 'config';

import { CardProjeto } from 'components/Card';
import { Modal } from 'components/Modal';

import { Header } from './styles';
import { Container, Row, Col12, Col4, Separator, Col3 } from 'components/Grid/styles';
import { BtnRoxo } from 'components/Button/styles';
import Navbar from 'components/Navbar';

export default function Dashboard() {

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(`${config.API_URL}/projects`, { headers: authHeader() })
      .then((res) => {
        setData(data.concat(res.data));
      })
      .catch(
        // handle error
      );
  }, []);

  return (
    <>
      { showModal && <Modal tipo='projeto' showModal={showModal} setShowModal={setShowModal} />}
      <Navbar />
      <Container>
        <Row>
          <Col12>
            <Header>Seus projetos</Header>
          </Col12>
        </Row>
        <Row>
          <Col4>
            <MDBInput />
          </Col4>
          <Col4 />
          <Col3><BtnRoxo onClick={() => setShowModal(true)}>Novo projeto</BtnRoxo></Col3>
        </Row>
        <Separator />
        <Row>
          {data.map(({id, status, title, description, completion_date}) =>
            <CardProjeto 
              key={id} 
              id={id} 
              status={status} 
              title={title} 
              description={description}
              completion_date={completion_date}
            />
          )}
        </Row>
      </Container>
    </>
  );
}