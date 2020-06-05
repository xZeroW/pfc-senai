import React, { useState } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default function Modal() {

  const [showModal, setShowModal] = useState(false);

  return (
    <MDBContainer>
      <MDBBtn color="primary" onClick={setShowModal(!showModal)}>MDBModal</MDBBtn>
      <MDBModal isOpen={showModal} toggle={setShowModal(!showModal)} centered>
        <MDBModalHeader toggle={setShowModal(!showModal)}>Titulo</MDBModalHeader>
        <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={setShowModal(!showModal)}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
}