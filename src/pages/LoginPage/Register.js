import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Requests, Validators } from "../../utils/Index";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/actions";
import { getContests } from "../../utils/Requests";

const Register = (props) =>
{
  let navigate = useNavigate();
  const validate = Yup.object({
    name: Validators.name,
    email: Validators.email,
    password: Validators.password,
    phoneNumber: Validators.phoneNumber,
    confirmPassword: Validators.confirmPassword,
  })
  return (
    <Formik
      initialValues={{
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={validate}
      onSubmit={async values =>
      {
        Requests.getContests(values).then(res =>
        {
        })
        Requests.signup(values).then(res =>
        {
          console.log(res)
          localStorage.setItem('pcsb-oj-token', res.data.token);
          props.login(res.data);
          alert("Register successful")
          navigate("/dashboardpage");

        }).catch(error =>
        {
          alert("Enter Valid Data !")
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
              <TextField placeholder="Name" name="name" type="text" />
            </div>
            <div className="form-group">
              <TextField placeholder="Email" name="email" type="email" />
            </div>
            <div className="form-group">
              <TextField placeholder="Phone Number" name="phoneNumber" type="tel" />
            </div>
            <div className="form-group">
              <TextField placeholder="password" name="password" type="password" />
            </div>
            <div className="form-group">
              <TextField placeholder="Confirm Password" name="confirmPassword" type="password" />
            </div>
            <button className="btn btn-primary" type="submit">Sign Up</button>
            <button className="btn btn-primary" type="reset">Reset</button>
          </Form>
          <p className="link">
            Already have an account? <Link to="/login">Sign In</Link>
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
    login: (userData) => dispatch(login(userData)),
    getContests: (contestData) => dispatch(getContests(contestData))
  }
}

export default connect(mapStateToProps, mapActionToProps)(Register);