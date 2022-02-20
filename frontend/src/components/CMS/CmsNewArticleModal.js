import styles from "./CmsNewArticleModal.module.css";
import axios from "axios";
import { Col, Form, Modal, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import pen from "../../assets/Img/pen-tool.svg";
import upload from "../../assets/Img/upload.svg";

const CmsNewArticleModal = ({ open, onClose, edit, newsId }) => {
  const [selectedRadio, setSelectedRadio] = useState('1')
  const isRadioSelected = value => {
    if(selectedRadio === value) return true;
  }
  const handleRadioClick = e => {
    setSelectedRadio(e.target.value)
  }
  const [data, setData] = useState({
    image: "",
    text: "",
    title: "",
    status: "",
  });

  const submitData = async () => {
    let token = localStorage.getItem("userToken");
    try {
      await axios.post(
        `http://localhost:5000/api/news`,
        {
          title: data.title,
          text: data.text,
          image: "fsfgsaas",
          status: selectedRadio,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onClose();
    } catch (err) {
      console.log("naki error", err);
    }
  };
  const submitHandler = () => {
    if (data.text === "" || data.title === "") return;
    submitData();
  };

  const getNewsData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/news/${newsId}`);
      const data = await response.json();
      setData({ ...data });
    } catch (error) {
      console.log(error);
    }
  };

  const editData = async () => {
    let token = localStorage.getItem("userToken");
    try {
      await axios.put(
        `http://localhost:5000/api/news/${newsId}`,
        {
          title: data.title,
          text: data.text,
          image: "fsfgsaas",
          status: selectedRadio,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (edit) {
      getNewsData();
    }
  }, []);

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
                value="1"
                onChange={handleRadioClick}
                checked={isRadioSelected('1')}
              />
              <label htmlFor="switch_left">Publish</label>
              <input
                type="radio"
                id="switch_right"
                name="switchToggle"
                value="2"
                onChange={handleRadioClick}
                checked={isRadioSelected('2')}
              />
              <label htmlFor="switch_right">Draft</label>
              <input
                type="radio"
                id="switch_schedule"
                name="switchToggle"
                value="3"
                onChange={handleRadioClick}
                checked={isRadioSelected('3')}
              />
              <label htmlFor="switch_schedule">Schedule</label>
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
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    value={data.title}
                    onChange={(e) =>
                      setData({ ...data, title: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className={styles.formLabel}>
                    Article Text
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Text"
                    value={data.text}
                    onChange={(e) => setData({ ...data, text: e.target.value })}
                  />
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
            onClick={() => {
              if (edit) return editData();
              return submitHandler();
            }}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default CmsNewArticleModal;
