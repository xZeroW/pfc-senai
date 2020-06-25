/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { authHeader } from '_helpers/auth-header';
import { config } from 'config';

import { CardTarefa } from 'components/Card';
import { Modal } from 'components/Modal';

import { Header } from './styles';
import { Container, Row, Col12, Col4, Separator, Col3 } from 'components/Grid/styles';
import { BtnRoxo } from 'components/Button/styles';
import Navbar from 'components/Navbar';
import { MaterialInputContainer } from 'components/Input/styles';

export default function Project(props) {

  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [filterInput, setFilterInput] = useState('');

  useEffect(() => {
    const fetchData = () => 
      Axios.get(`${config.API_URL}/tasks/${props.match.params.id}`, { headers: authHeader() })
        .then((res) => {
          setIsLoading(false);
          setData(data.concat(res.data));
        })
        .catch(function () {
        // handle error
        });
    fetchData();
  }, []);

  return (
    <>
      { showModal && <Modal projectId={props.match.params.id} showModal={showModal} setShowModal={setShowModal} />}
      <Navbar />
      <Container>
        <Row>
          <Col12>
            <Header>Nome do projeto</Header>
          </Col12>
        </Row>
        <Row>
          <Col4>
            <MaterialInputContainer>
              <input value={filterInput} onChange={(e) => setFilterInput(e.target.value)} id="filter" type="text" required />
              <label htmlFor="filter">Filtrar</label>
            </MaterialInputContainer>
          </Col4>
          <Col4 />
          <Col3><BtnRoxo onClick={() => setShowModal(!showModal)}>Nova tarefa</BtnRoxo></Col3>
        </Row>
        <Separator />
        <Row>
          { isLoading ?
            <p>Carregando...</p>  
            :
          <>
          {data.map(({id, status, title, description, project_id}) =>
            <CardTarefa 
              key={id} 
              id={id} 
              status={status} 
              title={title} 
              description={description}
              projectId={project_id}
            />
          )}
          </>
          }
          
        </Row>
      </Container>
    </>
  );
}