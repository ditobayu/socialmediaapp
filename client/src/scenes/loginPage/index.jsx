import React from "react";
import Asd from "./Asd";
// import Form from "./Form";
import { useState } from "react";
import { Formik, formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import Dropzone from "react-dropzone";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pageType, setPageType] = useState("login");
  const isLoginPage = pageType === "login";
  const isRegisterPage = pageType === "register";

  const handleFormSubmit = async (values, onSubmitProps) => {};

  return (
    <div>
      <div className="bg-cyan-400">aaasd</div>
      <Asd />
      <div className="bg-cyan-400">aaasd</div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLoginPage ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLoginPage ? loginSchema : registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="bg-cyan-300">aasdsd</div>
          </form>
        )}
      </Formik>
      {/* <Form /> */}
    </div>
  );
};

export default LoginPage;
