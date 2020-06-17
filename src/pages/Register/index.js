/* eslint-disable no-useless-escape */
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import ReactLoading from 'react-loading';
import { MDBContainer, MDBCard, MDBCardBody } from 'mdbreact';

import { authenticationService } from '_services/auth.service';
import { config } from 'config';

import { RegisterBigText, RegisterCombo, RegisterFormCard } from './styles';
import { BtnRoxo } from 'components/Button/styles';
import { StyledLink } from 'components/Link/styles';
import { LogoWhite } from 'components/Icons/styles';


export default class Register extends React.Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) { 
      // eslint-disable-next-line react/prop-types
      this.props.history.push('/dashboard');
    }
  }
  render(){

    return (
      <MDBContainer>
        <div className="py-5">
          <MDBCard>
            <MDBCardBody className="rounded" style={{ backgroundColor: '#802DD0' }}>
              <div className="row">
                <RegisterCombo className="col">
                  <RegisterBigText>Registre-se, é de graça.</RegisterBigText>
                  <LogoWhite width="320px" height="320px" />
                </RegisterCombo>
                <div className="col-md-6" style={{ marginTop: '5%' }}>
                  <RegisterFormCard>
                    <Formik
                      initialValues={{
                        first_name: '',
                        last_name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                      }}
                      validationSchema={Yup.object().shape({
                        first_name: Yup.string()
                          .max(10, 'Limite de 10 caracteres atingido.')
                          .matches(/^[A-Za-z0-9]+$/, 'Caracteres especiais não são permitidos.')
                          .required('Nome é requerido.'),
                        last_name: Yup.string()
                          .max(20, 'Limite de 20 caracteres atingido.')
                          .matches(/^[A-Za-z0-9]+$/, 'Caracteres especiais não são permitidos.')
                          .required('Sobrenome é requerido.'),
                        email: Yup.string()
                          .email('Insira um e-mail válido.')
                          .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Insira um e-mail válido.')
                          .required('E-mail é requerido.'),
                        password: Yup.string()
                          .min(8, 'Precisa ter mais que 8 caracteres.')
                          .max(16, 'Limite de 16 caracteres atingido.')
                          .required('Senha é requerida.'),
                        confirmPassword: Yup.string()
                          .oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais.')
                          .required('Confirme sua senha.')
                      })}
                      onSubmit={({ first_name, last_name, email, password }, { setStatus, setSubmitting, resetForm, setFieldError }) => {
                        setStatus();
                        Axios.post( config.API_URL + '/register', { first_name, last_name, email, password })
                          .then(
                            res => {
                              if (res.status === 201){
                                setSubmitting(false);
                                resetForm();
                                setStatus('Conta criada! Agora você pode ');
                              }
                            },
                            () => {
                              setSubmitting(false);
                              setFieldError('email', 'E-mail já existe');
                            }
                          );
                      }}>
                      {({ errors, status, touched, isSubmitting }) => (
                        <Form>
                          <div className="form-group">
                            <div className="row">
                              <div className="col">
                                <Field name="first_name" type="text" className={'form-control form-control-user' + (errors.first_name && touched.first_name ? ' is-invalid' : '')} placeholder="Nome" />
                                <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
                              </div>
                              <div className="col">
                                <Field name="last_name" type="text" className={'form-control form-control-user' + (errors.last_name && touched.last_name ? ' is-invalid' : '')} placeholder="Sobrenome" />
                                <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <Field name="email" type="email" className={'form-control form-control-user' + (errors.email && touched.email ? ' is-invalid' : '')} placeholder="E-mail" />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                          </div>
                          <div className="form-group">
                            <Field name="password" type="password" className={'form-control form-control-user' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="Senha" />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                          </div>
                          <div className="form-group">
                            <Field name="confirmPassword" type="password" className={'form-control form-control-user' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} placeholder="Confirmar Senha" />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                          </div>
                          <div className="form-group">
                            <BtnRoxo type="submit" disabled={isSubmitting}>Cadastrar</BtnRoxo>
                            {isSubmitting &&
                              <ReactLoading type='spin' color='#802DD0' height={24} width={24} />
                            }
                          </div>
                          {status &&
                            <div className={'alert alert-success'}>{status} <StyledLink to='/login'>Entrar!</StyledLink></div>
                          }
                        </Form>
                      )}
                    </Formik>
                    <hr />
                    <div className="text-center">
                      <StyledLink className="small" to="/login">Já tem uma conta? Entrar!</StyledLink>
                    </div>
                  </RegisterFormCard>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
    );
  }
}
