import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import styles from "./ModalReminder.module.css";

const ModalReminder = ({ onClose, open, date }) => {
  const [mail, setMail] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [error, setError] = useState(false);
  const handleClose = () => {
    onClose();
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (mail.length === 0 || scheduleTime.length === 0) {
      errorToast();
      setError(true);
      return;
    } else {
      const sendEmail = (_) => {
        fetch(
          `http://127.0.0.1:5000/send-email?recipient=${mail}&scheduleTime=${scheduleTime}&date=${date}`
        ) //query string url
          .catch((err) => console.error(err));
      };
      sendEmail();
      setScheduleTime("");
      setMail("");
      success();
      onClose();
    }
  };
  const errorToast = () => {
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
  const success = () => {
    toast.success("Reminder submitted successfully!", {
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
    <>
      <Modal
        show={open}
        onHide={() => {
          onClose();
        }}
        centered
      >
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
                onChange={(e) => {
                  setError(false);
                  setMail(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.<br/>
              </Form.Text>
              <Form.Label>Schedule date</Form.Label>
              <input
                type="datetime-local"
                value={scheduleTime}
                onChange={(e) => {
                  setError(false);
                  setScheduleTime(e.target.value);
                }}
                className={styles.datetime}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button
                className={`${styles.btn} ${styles.gray}`}
                onClick={handleClose}
              >
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
            </div>
          </Form>
        </Modal.Body>
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
      </Modal>
    </>
  );
};

export default ModalReminder;
