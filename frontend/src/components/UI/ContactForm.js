import { Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "./ContactForm.module.css";
import MainButton from "./MainButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const ContactForm = () => {
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    email: true,
    phoneNumber: true,
    message: true,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const formHandler = (e) => {
    let ok = true;
    e.preventDefault();
    if (formData.name.length === 0) {
      setFormIsValid({ ...formData, name: false });
      ok = false;
    }
    if (formData.email.length === 0) {
      setFormIsValid({ ...formData, email: false });
      ok = false;
    }
    if (formData.phoneNumber.length === 0) {
      setFormIsValid({ ...formData, phoneNumber: false });
      ok = false;
    }
    if (formData.message.length === 0) {
      setFormIsValid({ ...formData, message: false });
      ok = false;
    }
    if (ok) {
      success();
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } else error();
  };
  const success = () => {
    toast.success("Form submitted successfully!", {
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
    <Container fluid className={styles.bgElement}>
      <Container>
        <div className={styles.formInfo}>
          <p>Contact us!</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            convallis, ligula eget posuere accumsan, justo felis varius dui, sed
            blandit velit lorem eu libero. Curabitur bibendum velit magna, non
            tincidunt turpis blandit et. Ut id malesuada odio. Sed porttitor,
            massa ac blandit faucibus, ex sapien varius orci, at scelerisque
            nisl odio vel enim.
          </p>
        </div>
        <Form className={styles.form} onSubmit={formHandler}>
          <Row>
            <Col lg={6}>
              <div className={styles.formContent}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                <input
                  type="text"
                  placeholder={` Your name`}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    setFormIsValid({ ...formIsValid, name: true });
                  }}
                  style={{ all: "unset" }}
                  className={`${styles.formControl} ${
                    !formIsValid.name ? styles.formValid : ""
                  }`}
                ></input>
              </div>
              <div className={styles.formContent}>
                <FontAwesomeIcon icon={faAt} className={styles.icon} />
                <input
                  type="email"
                  placeholder={` Your email`}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setFormIsValid({ ...formIsValid, email: true });
                  }}
                  style={{ all: "unset" }}
                  className={`${styles.formControl} ${
                    !formIsValid.email ? styles.formValid : ""
                  }`}
                ></input>
              </div>
              <div className={styles.formContent}>
                <FontAwesomeIcon
                  icon={faPhone}
                  flip="horizontal"
                  className={styles.icon}
                />
                <input
                  placeholder={` Your phone number`}
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, phoneNumber: e.target.value });
                    setFormIsValid({ ...formIsValid, phoneNumber: true });
                  }}
                  type="number"
                  style={{ all: "unset" }}
                  className={`${styles.formControl} ${
                    !formIsValid.phoneNumber ? styles.formValid : ""
                  }`}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.formContent}>
                <input
                  as="textarea"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    setFormIsValid({ ...formIsValid, message: true });
                  }}
                  placeholder={` Type a message...`}
                  style={{ all: "unset" }}
                  className={`${styles.formControl} ${
                    !formIsValid.message ? styles.formValid : ""
                  }`}
                ></input>
              </div>
              <div className="d-flex justify-content-center">
                <MainButton txt="Send" />
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
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
};

export default ContactForm;
