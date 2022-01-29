import React, { useState } from "react";
import axios from "axios";

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
    if (allGud) return sendData();
    return setData(localData);
  };
  const valueChangeHandler = (value, index) => {
    const localData = [...data];
    localData[index].value = value;
    localData[index].invalid = false;
    setData(localData);
  };
  const sendData = async () => {
    axios.post("http://192.168.1.130:5000/api/auth/login", {
      email: data[0].value,
      password: data[1].value,
    });
  };
  return (
    <div>
      {data.map((elem, index) => (
        <div>
          <label>{elem.name}</label>
          <input
            type={elem.type}
            onChange={(e) => valueChangeHandler(e.target.value, index)}
            value={elem.value}
          />
          {elem?.invalid && (
            <p style={{ color: "#fff" }}>{`${elem.name} is invalid`}</p>
          )}
        </div>
      ))}
      <button onClick={checkDataHandler}>Login</button>
    </div>
  );
};

export default Login;
