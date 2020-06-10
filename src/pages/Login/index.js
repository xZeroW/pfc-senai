/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReactLoading from 'react-loading';
import { motion } from 'framer-motion';

import { history } from '_helpers/history';
import { authenticationService } from '_services/auth.service';

import { BtnRoxo } from 'components/Button/styles';
import { StyledLink } from 'components/Link/styles';
import { Ola } from './styles';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) { 
      this.props.history.push('/dashboard');
    }
  }

  render() {

    const pageTransitions = {
      in: {
        opacity: 1,
        y: 0
      },
      out: {
        opacity: 0,
        y: '-100%'
      }
    };

    return (
      <motion.div
        initial='out'
        exit='out'
        animate='in'
        variants={pageTransitions}
      >
        <div className="container">
          {/* <!-- Outer Row --> */}
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/* <!-- Nested Row within Card Body --> */}
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <Ola>Olá!</Ola>
                        </div>
                        <Formik
                          initialValues={{
                            email: '',
                            password: ''
                          }}
                          validationSchema={Yup.object().shape({
                            email: Yup.string()
                              .email('Insira um e-mail válido.')
                              .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Insira um e-mail válido.')
                              .required('E-mail é requerido.'),
                            password: Yup.string()
                              .min(8, 'Precisa ter mais que 6 caracteres.')
                              .max(16, 'Limite de 16 caracteres atingido.')
                              .required('Senha é requerida.')
                          })}
                          onSubmit={( { email, password }, { setStatus, setSubmitting } ) => {
                            setStatus();
                            authenticationService.login(email, password)
                              .then(
                                () => {
                                  history.go(0);
                                },
                                error => {
                                  setSubmitting(false);
                                  setStatus(error);
                                }
                              );
                          }}>
                          {({ errors, status, touched, isSubmitting }) => (
                            <Form>
                              <div className="form-group">
                                <Field name="email" type="text" placeholder="E-mail" className={'form-control form-control-user' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                              </div>
                              <div className="form-group">
                                <Field name="password" type="password" placeholder="Senha" className={'form-control form-control-user' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                              </div>
                              <div className="form-group">
                                <BtnRoxo type="submit" disabled={isSubmitting}>Entrar</BtnRoxo>
                                {isSubmitting &&
                                <ReactLoading type='spin' color='#802DD0' height={24} width={24} />
                                }
                              </div>
                              {status &&
                                <div className={'alert alert-danger'}>{status}</div>
                              }
                            </Form>
                          )}
                        </Formik>
                        <hr />
                        <div className="text-center">
                          <StyledLink className="small" to="/forgot-password">Esqueceu a senha?</StyledLink>
                        </div>
                        <div className="text-center">
                          <StyledLink className="small" to="/register">Criar cadastro!</StyledLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
