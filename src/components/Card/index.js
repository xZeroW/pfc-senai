import React, { useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { BsCheckBox, BsApp, BsClockHistory } from 'react-icons/bs';
import moment from 'moment';
import localization from 'moment/locale/pt-br';
import { useAuth0 } from '@auth0/auth0-react';
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from 'mdbreact';


import { config } from 'config';
import { ConfirmModal, ErrorModal } from 'components/Modal';

import { BlackLink } from 'components/Link/styles';
import { LogoLixeira } from 'components/Icons/styles';
import { Card } from './styles';
import { Link } from 'react-router-dom';

export function CardProjeto({ id, status, title, description, completion_date }) {

  const { getAccessTokenSilently } = useAuth0();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  return (
    <>
    { showErrorModal && 
        <ErrorModal 
          showErrorModal={showErrorModal}
        />
    }
    { showConfirmModal && 
      <ConfirmModal 
        id={id} 
        tipo='projeto' 
        name={title} 
        showConfirmModal={showConfirmModal} 
        setShowConfirmModal={setShowConfirmModal} 
      />}
    <MDBCol md="3">
      <Card className="mb-4">
        <MDBCardBody>
          <MDBRow>
            <MDBCol size="9">
              <MDBCardTitle>
                <BlackLink to={`/project/${id}`}>
                  {title}
                </BlackLink>
              </MDBCardTitle>
            </MDBCol>
            <MDBCol size="1">
              <LogoLixeira 
                title="Apagar?"
                width="18"
                height="18"
                alt="lixeira"
                onClick={
                  () => setShowConfirmModal(true)
                }
              />
            </MDBCol>
            <MDBCol size="1">
              {status === 0 ? (
                <Link
                  to="#"
                  onClick={async () => {
                    const token = await getAccessTokenSilently();
                    Axios.patch(
                      config.API_URL + `/projects/${id}`,
                      { status: 1 },
                      { headers: { Authorization: `Bearer ${token}` } }
                    )
                      .then((res) => {
                        if (res.status === 200) {
                          window.location.reload(true);
                        }
                      })
                      .catch(setShowErrorModal(true));
                  }}
                >
                  <BsApp
                    title="Completar?"
                    style={{ color: '#802DD0' }}
                    width="18"
                    height="18"
                    alt="completar"
                  />
                </Link>
              ) : (
                <BsCheckBox
                  style={{ color: '#802DD0' }}
                  width="18"
                  height="18"
                  alt="completar"
                />
              )}
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBCardText>{description}</MDBCardText>
          <div title="Prazo de entrega">
            <BsClockHistory /> {moment(completion_date).format('L')}
          </div>
        </MDBCardBody>
      </Card>
    </MDBCol>
    </>
  );
}

CardProjeto.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completion_date: PropTypes.string.isRequired
};

export function CardTarefa({ id, status, title, description, completion_date, projectId }) {

  const { getAccessTokenSilently } = useAuth0();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  return (
    <>
    { showConfirmModal && 
      <ConfirmModal 
        id={id} 
        tipo='tarefa' 
        name={title} 
        projectId={projectId}
        showConfirmModal={showConfirmModal} 
        setShowConfirmModal={setShowConfirmModal} 
      />}
      { showErrorModal && 
        <ErrorModal 
          showErrorModal={showErrorModal}
        />
      }
    <MDBCol md="3">
      <Card className="mb-4">
        <MDBCardBody>
          <MDBRow>
            <MDBCol size="9">
              <MDBCardTitle>{title}</MDBCardTitle>
            </MDBCol>
            <MDBCol size="1">
              <LogoLixeira 
                title="Apagar?"
                width="18" 
                height="18" 
                alt="lixeira" 
                onClick={
                  () => setShowConfirmModal(true)
                }/>
            </MDBCol>
            <MDBCol size="1">
              {status === 0 ? (
                <Link
                  to="#"
                  onClick={async () => {
                    const token = await getAccessTokenSilently();
                    Axios.patch(
                      config.API_URL + `/tasks/${id}`,
                      { status: 1 },
                      { headers: { Authorization: `Bearer ${token}` } }
                    )
                      .then(res => {
                        if (res.status === 200) {
                          window.location.reload(true);
                        }
                      })
                      .catch(setShowErrorModal(true));
                  }}
                >
                  <BsApp
                    title="Completar?"
                    style={{ color: '#802DD0' }}
                    width="18"
                    height="18"
                    alt="complete"
                  />
                </Link>
              ) : (
                <BsCheckBox
                  style={{ color: '#802DD0' }}
                  title="Apagar?"
                  width="18"
                  height="18"
                  alt="complete"
                />
              )}
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBCardText>{description}</MDBCardText>
          <div title="Prazo de entrega">
            <BsClockHistory /> {moment(completion_date).locale('pt-BR', localization).format('LL')}
          </div>
        </MDBCardBody>
      </Card>
    </MDBCol>
    </>
  );
}

CardTarefa.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  completion_date: PropTypes.string,
  projectId: PropTypes.number
};
