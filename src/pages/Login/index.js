/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { authenticationService } from '_services/auth.service';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) { 
      this.props.history.push('/');
    }

    document.body.classList.add('bg-gradient-primary');
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
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <Formik
                        initialValues={{
                          username: '',
                          password: ''
                        }}
                        validationSchema={Yup.object().shape({
                          username: Yup.string().required('Username is required'),
                          password: Yup.string().required('Password is required')
                        })}
                        onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
                          setStatus();
                          authenticationService.login(username, password)
                            .then(
                              () => {
                                const { from } = this.props.location.state || { from: { pathname: '/' } };
                                this.props.history.push(from);
                              },
                              error => {
                                setSubmitting(false);
                                setStatus(error);
                              }
                            );
                        }}>
                        {({ errors, status, touched, isSubmitting }) => (
                          <Form className="user">
                            <div className="form-group">
                              <Field name="username" type="text" placeholder="Username" className={'form-control form-control-user' + (errors.username && touched.username ? ' is-invalid' : '')} />
                              <ErrorMessage name="username" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                              <Field name="password" type="password" placeholder="Password" className={'form-control form-control-user' + (errors.password && touched.password ? ' is-invalid' : '')} />
                              <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                              <button type="submit" className="btn btn-primary btn-user btn-block" disabled={isSubmitting}>Login</button>
                              {isSubmitting &&
                                    <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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
                        <a className="small" href="/forgot-password">Forgot Password?</a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="/register">Create an Account!</a>
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
