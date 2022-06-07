import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Requests, Validators } from "../api/Index";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions";

const Login = (props) => {
  let navigate = useNavigate();
  const validate = Yup.object({
    email: Validators.email,
    password: Validators.password,
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={async (values) => {
        Requests.login(values)
          .then((res) => {
            localStorage.setItem("pcsb-oj-token", res.data.token);
            localStorage.setItem("userId", res.data._id);
            props.login(res.data);
            console.log(values);
            navigate("/");
          })
          .catch((err) => {
            alert(err.response.data);
          });
      }}
    >
      {(formik) => (
        <div className="register-form w-3/5 text-center m-auto py-14 justify-center">
          <h1 className="text-4xl p-4 ">Sign In</h1>
          <Form className="form" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <TextField placeholder="Email" name="email" type="email" />
            </div>
            <div className="form-group">
              <TextField
                placeholder="password"
                name="password"
                type="password"
              />
            </div>
            <button
              className=" bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
              type="submit"
            >
              Login
            </button>
            <button
              className=" bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              type="reset"
            >
              Reset
            </button>
          </Form>
          <p className="link p-3 ">
            Register for the event?{" "}
            <Link to="/register" className="text-cyan-500">
              Register
            </Link>
          </p>
          <div className="p-24"></div>
        </div>
      )}
    </Formik>
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
  };
}

export default connect(mapStateToProps, mapActionToProps)(Login);
