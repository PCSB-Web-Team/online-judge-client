import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Requests, Validators } from "../api/Index";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions";
import { ToastContainer, toast } from "react-toastify";

const Login = (props) => {
  let navigate = useNavigate();
  const validate = Yup.object({
    email: Validators.email,
    password: Validators.password,
  });
  const theme = localStorage.getItem("theme");

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
            toast.success("Successful Login");
            navigate("/");
          })
          .catch((err) => {
            toast.warn(err.response.data);
          });
      }}
    >
      {(formik) => (
        <div className="w-full h-screen py-4">
          <div className="register-form w-80 md:w-[400px] text-center m-auto py-14 justify-center bg-slate-700/60 h-min">
            <h1 className="text-4xl p-4">Sign In</h1>
            <Form
              className="p-4 space-y-4 mx-auto "
              onSubmit={formik.handleSubmit}
            >
              <Field
                className=" bg-gray-500 p-2 w-full outline-none"
                placeholder="Email"
                name="email"
                type="email"
              />
              <Field
                className="bg-gray-500 p-2 w-full outline-none"
                placeholder="password"
                name="password"
                type="password"
              />
              <div className="space-x-2">
                <button
                  className=" bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
                  type="submit"
                >
                  Login
                </button>
                <button
                  className=" bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  type="reset"
                >
                  Reset
                </button>
              </div>
            </Form>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              draggable
              pauseOnHover
              theme={theme == "dark"}
            />
            <p className="link p-1 flex space-x-2 justify-center">
              <div>Register for the event?</div>
              <Link to="/" className="text-cyan-500">
                Register
              </Link>
            </p>
          </div>
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
