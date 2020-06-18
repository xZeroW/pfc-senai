/* eslint-disable react/prop-types */
import React from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import ReactLoading from 'react-loading';
import moment from 'moment';

import { history } from '_helpers/history';
import { authHeader } from '_helpers/auth-header';
import { config } from 'config';

import { BtnRoxo } from 'components/Button/styles';

export function Modal({ projectId, tipo, showModal, setShowModal }) {

  var endpoint;
  if(tipo === 'projeto') {
    endpoint = '/projects';
  } else {
    endpoint = `/tasks/${projectId}`;
  }

  return (
    <MDBModal isOpen={showModal} centered>
      <MDBModalHeader>{ tipo === 'projeto' ? 'Novo projeto' : 'Nova tarefa'}</MDBModalHeader>
      <MDBModalBody>
        <Formik
          initialValues={{
            title: '',
            description: '',
            completion_date: '',
            status: 0
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string()
              .max(15, 'Limite de 15 caracteres atingido.')
              .matches(/^[A-Za-z0-9 ]+$/, 'Caracteres especiais não são permitidos.')
              .required('Título é requerido.'),
            description: Yup.string()
              .max(50, 'Limite de 50 caracteres atingido.')
              .matches(/^[A-Za-z0-9 ]+$/, 'Caracteres especiais não são permitidos.')
              .required('Descrição é requerido.'),
            completion_date: Yup.date()
              .required('Data de entrega é requirido.'),
            status: Yup.bool()
              .required()
          })}
          onSubmit={({ title, description, completion_date, status  }, { setSubmitting }) => {
            completion_date = moment(completion_date).format();
            Axios.post( config.API_URL + endpoint, { title, description, completion_date, status }, { headers: authHeader() })
              .then(
                res => {
                  if (res.status === 200 || res.status === 201){
                    history.go(0);
                  }
                },
                () => {
                  setSubmitting(false);
                }
              );
          }}>
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="form-group">
                <Field name="title" type="text" className={'form-control form-control-user' + (errors.title && touched.title ? ' is-invalid' : '')} placeholder="Título" />
                <ErrorMessage name="title" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <Field name="description" type="text" className={'form-control form-control-user' + (errors.description && touched.description ? ' is-invalid' : '')} placeholder="Descrição" />
                <ErrorMessage name="description" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <Field name="completion_date" type="date" className={'form-control form-control-user' + (errors.completion_date && touched.completion_date ? ' is-invalid' : '')} placeholder="Senha" />
                <ErrorMessage name="completion_date" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <BtnRoxo type="submit" disabled={isSubmitting}>Criar</BtnRoxo>
                {isSubmitting &&
                  <ReactLoading type='spin' color='#802DD0' height={24} width={24} />
                }
              </div>
            </Form>
          )}
        </Formik>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" onClick={() => setShowModal(!showModal)}>Fechar</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
}

export function ConfirmModal({ id, name, tipo, showConfirmModal, setShowConfirmModal }) {

  var endpoint;
  if(tipo === 'projeto') {
    endpoint = `/projects/${id}`;
  } else {
    endpoint = `/tasks/${id}`;
  }

  return (
    <MDBModal isOpen={showConfirmModal} centered>
      <MDBModalHeader>{`Apagar "${name}"?`}</MDBModalHeader>
      <MDBModalBody>
        <p>Você tem certeza disso?</p>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn 
          color="danger" 
          onClick={
            () => Axios.delete( config.API_URL + endpoint, { headers: authHeader() })
              .then(
                res => {
                  if (res.status === 200){
                    history.go(0);
                  }
                }
              )
              .catch(
                //err => console.log(err)
              )
          }>Apagar</MDBBtn>
        <MDBBtn 
          color="secondary" 
          onClick={() => setShowConfirmModal(false)}>Cancelar</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
}