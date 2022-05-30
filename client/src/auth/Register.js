import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Requests, Validators } from "../../utils/Index";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions";
import { getContests } from "../../utils/Requests";

const Register = (props) => {
  let navigate = useNavigate();
  const validate = Yup.object({
    name: Validators.name,
    email: Validators.email,
    password: Validators.password,
    phoneNumber: Validators.phoneNumber,
    confirmPassword: Validators.confirmPassword,
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={async (values) => {
          Requests.getContests(values).then((res) => {});
          Requests.signup(values)
            .then((res) => {
              console.log(res);
              localStorage.setItem("pcsb-oj-token", res.data.token);
              props.login(res.data);
              alert("Register successful");
              navigate("/");
            })
            .catch((error) => {});
        }}
      >
        {(formik) => (
          <div className="register-form">
            <h1 className="text-4xl p-3 ">Sign Up</h1>
            <p className="text-xl p-2 ">
              <i className="fas fa-user "></i> Create Your Account
            </p>
            <Form className="form" onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <TextField placeholder="Name" name="name" type="text" />
              </div>
              <div className="form-group">
                <TextField placeholder="Email" name="email" type="email" />
              </div>
              <div className="form-group">
                <TextField
                  placeholder="Phone Number"
                  name="phoneNumber"
                  type="tel"
                />
              </div>
              <div className="form-group">
                <TextField
                  placeholder="password"
                  name="password"
                  type="password"
                />
              </div>
              <div className="form-group">
                <TextField
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
              </div>
              <button
                className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
                type="submit"
              >
                Login
              </button>
              <button
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                type="reset"
              >
                Reset
              </button>{" "}
            </Form>
            <p className="link p-3">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        )}
      </Formik>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
  };
}

function mapActionToProps(dispatch) {
  return {
    login: (userData) => dispatch(login(userData)),
    getContests: (contestData) => dispatch(getContests(contestData)),
  };
}

export default connect(mapStateToProps, mapActionToProps)(Register);
