import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Requests, Validators } from "../../utils/Index";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/actions";

const Login = (props) =>
{
  let navigate = useNavigate();
  const validate = Yup.object({
    email: Validators.email,
    password: Validators.password,
  })

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={async values =>
      {
        console.log(values)
        Requests.login(values).then(res =>
        {
          navigate("/loader")
          localStorage.setItem('pcsb-oj-token', res.data.token);
          console.log(res.data);
          props.log(res.data)
          navigate("/dashboard");
        }).catch(error =>
        {
          alert("Invalid Data")
        })
      }}
    >
      {formik => (
        <div className="register-form">
          <h1 className="heading">Sign Up</h1>
          <p className="lead">
            <i className="fas fa-user"></i> Create Your Account
          </p>
          <Form className="form" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <TextField placeholder="Email" name="email" type="email" />
            </div>
            <div className="form-group">
              <TextField placeholder="password" name="password" type="password" />
            </div>

            <button className="btn btn-primary" type="submit">Login</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
          <p className="link">
            Don"t have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      )}
    </Formik>
  )
}

function mapStateToProps(state)
{
  return {
    isAuthenticated: state.isAuthenticated
  }
}
function mapActionToProps(dispatch)
{
  return {
    log: (userData) => dispatch(login(userData))
  }
}

export default connect(mapStateToProps, mapActionToProps)(Login);