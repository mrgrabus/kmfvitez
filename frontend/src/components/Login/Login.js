import React, { useState } from "react";

import axios from "axios";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Login.module.css";
import grb from "../../assets/Img/kmf_grb.png";
import user from "../../assets/Img/user.svg";
import key from "../../assets/Img/key.svg";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();

  const [data, setData] = useState([
    {
      name: "Email",
      type: "email",
      value: "",
      invalid: false,
    },
    {
      name: "Password",
      type: "password",
      value: "",
      invalid: false,
    },
  ]);
  const [errorMessage, setErrorMessage] = useState("");
  const checkDataHandler = () => {
    let allGud = true;
    const localData = [...data];
    localData.forEach((element) => {
      if (element.value === "") {
        element.invalid = true;
        allGud = false;
      }
    });
    if (allGud) {
      return sendData();
    } else {
      error();
      return setData(localData);
    }
  };
  const valueChangeHandler = (value, index) => {
    const localData = [...data];
    localData[index].value = value;
    localData[index].invalid = false;
    setData(localData);
  };
  const sendData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: data[0].value,
          password: data[1].value,
        }
      );
      if (response.status === 200) {
        localStorage.setItem("userToken", response?.data?.token);
        setErrorMessage("");
        navigate("/cms/dashboard");
      }
    } catch (error) {
      setErrorMessage(error?.response?.data?.message || "Something went wrong");
      submitError();
    }
  };
  const submitError = () => {
    toast.error("Something went wrong", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const error = () => {
    toast.error("Fields are not valid!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <Container fluid className={`position-relative vh-100 ${styles.bg}`}>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="d-flex justify-content-center mb-5">
          <img src={grb} alt="kmf grb" />
        </div>
        {data.map((elem, index) => (
          <div className={styles.form}>
            <img
              src={elem.type === "email" ? user : key}
              className={styles.loginIcons}
            />
            <input
              type={elem.type}
              placeholder={`${elem.name}`}
              onChange={(e) => valueChangeHandler(e.target.value, index)}
              value={elem.value}
              className={`${styles.formInput} ${elem?.invalid ? styles.invalid : ''}`}
            />
            {elem?.invalid && (
              <p className={styles.invalidP}>{`${elem.name} is invalid`}</p>
            )}
          </div>
        ))}
        <button className={styles.btn} onClick={checkDataHandler}>
          Login
          <FontAwesomeIcon
            icon={faArrowRight}
            className={styles.arrowIcon}
          ></FontAwesomeIcon>
        </button>
        <p className={styles.passwordreset}>Forgot password?</p>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Container>
  );
};

export default Login;
