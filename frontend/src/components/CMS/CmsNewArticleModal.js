import styles from "./CmsNewArticleModal.module.css";
import { Col, Form, Modal, Row, Button } from "react-bootstrap";
import { useState } from "react";
import pen from "../../assets/Img/pen-tool.svg";
import upload from "../../assets/Img/upload.svg";

const CmsNewArticleModal = ({ open, onClose }) => {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle(!toggle);
  };
  const submitHandler = () => {
    console.log("submit");
  };
  if (!open) return null;
  return (
    <>
      <Modal
        show={open}
        onHide={() => {
          onClose();
        }}
        centered
        dialogClassName={styles.mainModal}
        onHide={onClose}
      >
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.title}>
              <img src={pen} alt="pen" />
              <span>Create new article</span>
            </div>
            <form className={styles.switchField}>
              <input
                type="radio"
                id="switch_left"
                name="switchToggle"
                value="Draft"
                onChange={toggleState}
                checked={!toggle}
              />
              <label htmlFor="switch_left">Draft</label>
              <input
                type="radio"
                id="switch_right"
                name="switchToggle"
                value="Schedule"
                onChange={toggleState}
                checked={!toggle}
              />
              <label htmlFor="switch_right">Schedule</label>
            </form>
          </div>
        </div>
        <Modal.Body>
          <Row className={styles.bodyRow}>
            <Col lg={8}>
              <h1 className={styles.bodyTitle}>Article Content</h1>
            </Col>
            <Col lg={4}>
              <h1 className={styles.bodyTitle}>Article Image</h1>
            </Col>
          </Row>
          <Row className={styles.bodyRow2}>
            <Col lg={7} className={styles.leftPanel}>
              <Form className={styles.form}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className={styles.formLabel}>
                    Article Title
                  </Form.Label>
                  <Form.Control type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className={styles.formLabel}>
                    Article Text
                  </Form.Label>
                  <Form.Control as="textarea" rows={6} placeholder="Text" />
                </Form.Group>
              </Form>
            </Col>
            <Col lg={5}>
              <div className="d-flex flex-column align-items-center">
                <img src={upload} alt="upload" className={styles.upload} />
                <p className={styles.uploadText}>Drag and drop photos</p>
                <p className={styles.uploadInfo}>
                  JPG and PNG images - max 2MB
                </p>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <div className={styles.footer}>
          <Button className={`${styles.btn} ${styles.gray}`} onClick={onClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            className={styles.btn}
            onSubmit={submitHandler}
          >
            Publish
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default CmsNewArticleModal;
