import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import { config } from 'config';

import { CardProjeto } from 'components/Card';
import { Modal } from 'components/Modal';

import { Header } from './styles';
import { Container, Row, Col12, Col4, Separator, Col3 } from 'components/Grid/styles';
import { BtnRoxo } from 'components/Button/styles';
import Navbar from 'components/Navbar';
import { MaterialInputContainer } from 'components/Input/styles';

export default function Dashboard() {

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [projects, setProjects] = useState();
  const [filterInput, setFilterInput] = useState('');

  const { getAccessTokenSilently } = useAuth0();

  // fetch projects list
  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessTokenSilently();
      Axios.get(`${config.API_URL}/projects`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          setData(res.data);
          setProjects(res.data);
        })
        .catch(
          // handle error
        );};
    fetchData();
  }, []);

  // live search
  useEffect(() => {
    if(projects === undefined){
      return;
    } else {
      setProjects(data.filter(item => {
        return item.title.toLowerCase().indexOf(filterInput.toLowerCase()) !== -1;
      }));
    }
  }, [filterInput]);

  console.log(config.API_URL);

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
            <MaterialInputContainer>
              <input value={filterInput} onChange={(e) => setFilterInput(e.target.value)} id="filter" type="text" pattern=".+" required />
              <label htmlFor="filter">Filtrar</label>
            </MaterialInputContainer>
          </Col4>
          <Col4 />
          <Col3><BtnRoxo onClick={() => setShowModal(true)}>Novo projeto</BtnRoxo></Col3>
        </Row>
        <Separator />
        <Row>
          { projects !== undefined ?
            <>
            {projects.map(({id, status, title, description, completion_date}) =>
              <CardProjeto 
                key={id} 
                id={id} 
                status={status} 
                title={title} 
                description={description}
                completion_date={completion_date}
              />
            )}</> : <></>}
        </Row>
      </Container>
    </>
  );
}