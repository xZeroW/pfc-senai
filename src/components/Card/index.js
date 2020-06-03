import React from 'react';
import PropTypes from 'prop-types';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBIcon } from 'mdbreact';

import { LogoLixeira} from 'components/Icons/styles';

export function CardProjeto({title, description}) {
  return(
    <MDBCol md="3">
      <MDBCard className="mb-4">
        <MDBCardBody>
          <MDBRow>
            <MDBCol size="10">
              <MDBCardTitle>{title}</MDBCardTitle>
            </MDBCol>
            <MDBCol size="1">
              <a href='#!'>
                <LogoLixeira width='18' height='18' alt='lixeira' />
              </a>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBCardText>
            {description}
          </MDBCardText>
          <a href='#!' className='black-text d-flex justify-content-end'>
            <h5>
                Acessar
              <MDBIcon icon='angle-double-right' className='ml-2' />
            </h5>
          </a>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

CardProjeto.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export function CardTarefa() {
  return (
    <></>
  );
}