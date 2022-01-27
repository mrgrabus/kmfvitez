import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAt,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Container>
      <div className={styles.formInfo}>
        <p>Contact us!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis,
          ligula eget posuere accumsan, justo felis varius dui, sed blandit
          velit lorem eu libero. Curabitur bibendum velit magna, non tincidunt
          turpis blandit et. Ut id malesuada odio. Sed porttitor, massa ac
          blandit faucibus, ex sapien varius orci, at scelerisque nisl odio vel
          enim.
        </p>
      </div>
      <Form className={styles.form}>
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
                type='number'
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
            <Button className={styles.btn}>
              Send
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.arrowIcon}
              ></FontAwesomeIcon>
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
