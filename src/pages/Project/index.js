/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { authHeader } from '_helpers/auth-header';
import { config } from 'config';

import { CardTarefa } from 'components/Card';
import { Modal } from 'components/Modal';
import Loading from 'components/Loading';

import { Header } from './styles';
import { Container, Row, Col12, Col4, Separator, Col3 } from 'components/Grid/styles';
import { BtnRoxo } from 'components/Button/styles';
import Navbar from 'components/Navbar';
import { MaterialInputContainer } from 'components/Input/styles';

export default function Project(props) {

  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [tasks, setTasks] = useState();
  const [filterInput, setFilterInput] = useState('');

  // fetch project data
  useEffect(() => {
    const fetchData = () => 
      Axios.get(`${config.API_URL}/projects/${props.match.params.id}`, { headers: authHeader() })
        .then(res => {
          setData(res.data);
          setTasks(res.data.tasks);
          setIsLoading(false);
        })
        .catch(function () {
        // handle error
        });
    fetchData();
  }, []);

  // live search
  useEffect(() => {
    if(isLoading){
      return;
    } else {
      setTasks(data.tasks.filter(item => {
        return item.title.toLowerCase().indexOf(filterInput.toLowerCase()) !== -1;
      }));
    }
  }, [filterInput]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      { showModal && <Modal projectId={props.match.params.id} showModal={showModal} setShowModal={setShowModal} />}
      <Navbar />
      <Container>
        <Row>
          <Col12>
            <Header>{data['title']}</Header>
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
          {tasks.map(({id, status, title, description, project_id}) =>
            <CardTarefa 
              key={id} 
              id={id} 
              status={status} 
              title={title} 
              description={description}
              projectId={project_id}
            />
          )}
        </Row>
      </Container>
    </>
  );
}