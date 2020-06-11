import React from 'react';
import PropTypes from 'prop-types';
import { RiArrowRightSLine } from 'react-icons/ri';
import { MDBRow, MDBCol, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact';

import { BlackLink } from 'components/Link/styles';
import { LogoLixeira} from 'components/Icons/styles';
import { Card } from './styles';

export function CardProjeto({id, title, description}) {
  return(
    <MDBCol md="3">
      <Card className="mb-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
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

export function CardTarefa() {
  return (
    <></>
  );
}