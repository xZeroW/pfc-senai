import React from 'react';
import PropTypes from 'prop-types';
import { RiArrowRightSLine } from 'react-icons/ri';
import { MDBRow, MDBCol, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact';

import { BsCheckBox, BsApp } from 'react-icons/bs';

import { BlackLink } from 'components/Link/styles';
import { LogoLixeira } from 'components/Icons/styles';
import { Card } from './styles';

export function CardProjeto({id, title, description}) {
  return(
    <MDBCol md="3">
      <Card className="mb-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
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
              { }
              <a href='#!'>
                <BsCheckBox width='18' height='18' alt='complete' />
              </a>
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export function CardTarefa({status, title, description}) {
  return(
    <MDBCol md="3">
      <Card className="mb-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
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
                <a href='#!'>
                  <BsApp width='18' height='18' alt='complete' />
                </a>
                :
                <a href='#!'>
                  <BsCheckBox width='18' height='18' alt='complete' />
                </a>
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
  status: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};