import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import styles from "./ModalReminder.module.css";

const ModalReminder = (props) => {
  const [show, setShow] = useState(true);
  const [mail, setMail] = useState("");
  const handleClose = () => {
    setShow(false);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {show && (
        <Modal show={props.show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Match Reminder</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Set a reminder for this match by typing ur email in the field below:
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={mail}
                  onInput={(e) => setMail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                className={styles.btn}
                onSubmit={submitHandler}
              >
                Set Reminder
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ModalReminder;
