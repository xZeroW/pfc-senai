/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReactLoading from 'react-loading';

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
    return (
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <Ola>Olá!</Ola>
                      </div>
                      <Formik
                        initialValues={{
                          username: '',
                          password: ''
                        }}
                        validationSchema={Yup.object().shape({
                          username: Yup.string()
                            .min(6, 'Precisa ter mais que 6 caracteres.')
                            .max(10, 'Limite de 10 caracteres atingido.')
                            .matches(/^[A-Za-z0-9]+$/, 'Caracteres especiais não são permitidos.')
                            .required('Usuário é requerido.'),
                          password: Yup.string()
                            .min(8, 'Precisa ter mais que 6 caracteres.')
                            .max(16, 'Limite de 16 caracteres atingido.')
                            .required('Senha é requerida.')
                        })}
                        onSubmit={( username, password, setStatus, setSubmitting ) => {
                          setStatus();
                          authenticationService.login(username, password)
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
                              <Field name="username" type="text" placeholder="Usuário" className={'form-control form-control-user' + (errors.username && touched.username ? ' is-invalid' : '')} />
                              <ErrorMessage name="username" component="div" className="invalid-feedback" />
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
    );
  }
}
