import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import styles from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import grb from "../../assets/Img/kmf_grb.png";

const Login = () => {
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
      console.log("poslani podaci");
      return sendData();
    }
    return setData(localData);
  };
  const valueChangeHandler = (value, index) => {
    const localData = [...data];
    localData[index].value = value;
    localData[index].invalid = false;
    setData(localData);
  };
  const sendData = async () => {
    axios.post("http://localhost:5000/api/auth/login", {
      email: data[0].value,
      password: data[1].value,
    });
  };
  return (
    <Container fluid className={`position-relative vh-100 ${styles.bg}`}>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="d-flex justify-content-center mb-5">
          <img src={grb} alt="kmf grb"/>
        </div>
        {data.map((elem, index) => (
          <div className={styles.form}>
            <input
              type={elem.type}
              placeholder={`${elem.name}`}
              onChange={(e) => valueChangeHandler(e.target.value, index)}
              value={elem.value}
              className={styles.formInput}
            />
            {elem?.invalid && (
              <p style={{ color: "#fff" }}>{`${elem.name} is invalid`}</p>
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
    </Container>
  );
};

export default Login;