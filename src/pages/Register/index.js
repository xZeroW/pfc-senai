import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

import { authenticationService } from '_services/auth.service';
import { config } from 'config';

import { BtnRoxo } from 'components/Button/styles';
import { Link } from 'components/Link/styles';
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
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0 rounded" style={{ backgroundColor: '#802DD0' }}>
            <div className="row">
              <div className="col p-5">
                <h1 style={{ color: '#FFF' }}>Registre-se, é de graça.</h1>
                <LogoWhite width="360px" height="360px" />
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="p-5 rounded" style={{ backgroundColor: '#FFF' }}>
                    <Formik
                      initialValues={{
                        email: '',
                        username: '',
                        password: '',
                        confirmPassword: ''
                      }}
                      validationSchema={Yup.object().shape({
                        username: Yup.string().required('Usuário é requerido'),
                        password: Yup.string().required('Senha é requerido'),
                        email: Yup.string().email().required('E-mail é requerido'),
                        confirmPassword: Yup.string()
                          .oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais')
                          .required('Confirme sua senha')
                      })}
                      onSubmit={({ username, email, password }, { setStatus, setSubmitting, resetForm, setFieldError }) => {
                        setStatus();
                        Axios.post( config.API_URL + '/users', { username, email, password })
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
                              setFieldError('username', 'Usuário já existe');
                            }
                          );
                      }}>
                      {({ errors, status, touched, isSubmitting }) => (
                        <Form className="user p-3">
                          <div className="form-group">
                            <Field name="username" type="text" className={'form-control form-control-user' + (errors.username && touched.username ? ' is-invalid' : '')} placeholder="Usuário" />
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
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
                              <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                          </div>
                          {status &&
                            <div className={'alert alert-success'}>{status} <Link href='/login'>Entrar</Link></div>
                          }
                        </Form>
                      )}
                    </Formik>
                    <hr />
                    <div className="text-center">
                      <Link className="small" href="/login">Já tem uma conta? Entrar!</Link>
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
