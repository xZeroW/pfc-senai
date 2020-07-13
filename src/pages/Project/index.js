/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import { config } from 'config';

import { CardTarefa } from 'components/Card';
import { Modal } from 'components/Modal';

import { Header } from './styles';
import { Container, Row, Col12, Col4, Separator, Col3 } from 'components/Grid/styles';
import { BtnRoxo } from 'components/Button/styles';
import Navbar from 'components/Navbar';
import { MaterialInputContainer } from 'components/Input/styles';

export default function Project(props) {

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [tasks, setTasks] = useState();
  const [filterInput, setFilterInput] = useState('');

  const { getAccessTokenSilently } = useAuth0();

  // fetch project data
  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessTokenSilently();
      Axios.get(`${config.API_URL}/projects/${props.match.params.id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          setData(res.data);
          setTasks(res.data.tasks);
        })
        .catch(function () {
        // handle error
        });
    };
    fetchData();
  }, []);

  // live search
  useEffect(() => {
    if(tasks  === undefined){
      return;
    } else {
      setTasks(data.tasks.filter(item => {
        return item.title.toLowerCase().indexOf(filterInput.toLowerCase()) !== -1;
      }));
    }
  }, [filterInput]);

  return (
    <>
      { showModal && <Modal projectId={props.match.params.id} showModal={showModal} setShowModal={setShowModal} />}
      <Navbar />
      <Container>
        <Row>
          <Col12>
            <Header>{data !== undefined ? data['title'] : 'seu projeto'}</Header>
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
          {tasks !== undefined ?
            <>
            {tasks.map(({id, status, title, description, project_id}) =>
              <CardTarefa 
                key={id} 
                id={id} 
                status={status} 
                title={title} 
                description={description}
                projectId={project_id}
              />
            )}</> : <></>}
        </Row>
      </Container>
    </>
  );
}