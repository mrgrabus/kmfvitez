import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from './ModalReminder.module.css';

const ModalReminder = (props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      {show && (
        <Modal show={props.show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Match Reminder</Modal.Title>
          </Modal.Header>
          <Modal.Body>Set a reminder for this match by typing ur email in the field below:</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" className={styles.btn} onClick={handleClose}>
              Set Reminder
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default ModalReminder;
