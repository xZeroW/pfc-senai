import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { RiArrowRightSLine } from 'react-icons/ri';
import { MDBRow, MDBCol, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact';
import { BsCheckBox, BsApp } from 'react-icons/bs';

import { config } from 'config';
import { authHeader } from '_helpers/auth-header';

import { BlackLink } from 'components/Link/styles';
import { LogoLixeira } from 'components/Icons/styles';
import { Card } from './styles';

export function CardProjeto({id, status, title, description}) {
  return(
    <MDBCol md="3">
      <Card className="mb-4" >
        <MDBCardBody>
          <MDBRow>
            <MDBCol size="9">
              <MDBCardTitle>{title}</MDBCardTitle>
            </MDBCol>
            <MDBCol size="1">
              <a href='#!'>
                <LogoLixeira width='18' height='18' alt='lixeira' />
              </a>
            </MDBCol>
            <MDBCol size="1">
              { status === 0 ? 
                <a href='#' onClick={() =>
                  Axios.patch(config.API_URL + `/projects/${id}` , { 'status':1 }, { headers: authHeader() })
                    .then(
                      res => {
                        if (res.status === 200) {
                          window.location.reload(true);
                        }
                      }
                    ).catch(
                      (err) => console.log(err)
                    )
                } >
                  <BsApp
                    style={{ color: '#802DD0' }}
                    width='18' 
                    height='18' 
                    alt='complete' />
                </a>
                :
                <BsCheckBox style={{ color: '#802DD0' }} width='18' height='18' alt='complete' />
              }
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBCardText>
            {description}
          </MDBCardText>
          <div className='black-text d-flex justify-content-end'>
            <BlackLink to={`/tasks/${id}`}>
                Acessar
              <RiArrowRightSLine />
            </BlackLink>
          </div>
        </MDBCardBody>
      </Card>
    </MDBCol>
  );
}

CardProjeto.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export function CardTarefa({id, status, title, description}) {

  return(
    <MDBCol md="3">
      <Card className="mb-4" >
        <MDBCardBody>
          <MDBRow>
            <MDBCol size="9">
              <MDBCardTitle>{title}</MDBCardTitle>
            </MDBCol>
            <MDBCol size="1">
              <a href='#!'>
                <LogoLixeira width='18' height='18' alt='lixeira' />
              </a>
            </MDBCol>
            <MDBCol size="1">
              { status === 0 ? 
                <a href='#' onClick={() =>
                  Axios.patch(config.API_URL + `/tasks/${id}` , { 'status':1 }, { headers: authHeader() })
                    .then(
                      res => {
                        if (res.status === 200) {
                          window.location.reload(true);
                        }
                      }
                    ).catch(
                      (err) => console.log(err)
                    )
                } >
                  <BsApp
                    width='18' 
                    height='18' 
                    alt='complete' />
                </a>
                :
                <BsCheckBox width='18' height='18' alt='complete' />
              }
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBCardText>
            {description}
          </MDBCardText>
        </MDBCardBody>
      </Card>
    </MDBCol>
  );
}

CardTarefa.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};