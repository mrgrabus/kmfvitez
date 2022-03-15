import { Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "./ContactForm.module.css";
import MainButton from "./MainButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };
  const notify = () => {
    toast.success("Form submitted successfully !", {
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
                  style={{ all: "unset" }}
                  className={styles.formControl}
                ></input>
              </div>
              <div className={styles.formContent}>
                <FontAwesomeIcon icon={faAt} className={styles.icon} />
                <input
                  type="email"
                  placeholder={` Your email`}
                  style={{ all: "unset" }}
                  className={styles.formControl}
                ></input>
              </div>
              <div className={styles.formContent}>
                <FontAwesomeIcon
                  icon={faPhone}
                  flip="horizontal"
                  className={styles.icon}
                />
                <input
                  type="text"
                  placeholder={` Your phone number`}
                  type="number"
                  style={{ all: "unset" }}
                  className={styles.formControl}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.formContent}>
                <input
                  as="textarea"
                  placeholder={` Type a message...`}
                  style={{ all: "unset" }}
                  className={styles.formControl}
                ></input>
              </div>
              <div onClick={notify}>
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
