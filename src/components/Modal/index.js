import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence>
      { showModal && (
        <motion.div>
          <MDBContainer>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func
};