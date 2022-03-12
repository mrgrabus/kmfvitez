import styles from "./CmsNewArticleModal.module.css";
import axios from "axios";
import { Col, Form, Modal, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import pen from "../../assets/Img/pen-tool.svg";
import upload from "../../assets/Img/upload.svg";
import DragAndDrop from "../UI/DragAndDrop";

const CmsNewTeamModal = ({ open, onClose, edit, newsId }) => {
  const [data, setData] = useState({
    teamName: "",
    grb: "",
  });

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const dragOver = (e) => {
    preventDefault(e);
  };

  const dragEnter = (e) => {
    preventDefault(e);
  };

  const dragLeave = (e) => {
    preventDefault(e);
  };

  const fileDrop = (e) => {
    preventDefault(e);
    setData({ ...data, image: e.target.files[0] });
  };

  const submitData = async () => {
    let token = localStorage.getItem("userToken");
    const formData = new FormData();
    formData.append("image", data.grb);
    formData.append("teamName", data.teamName);
    try {
      await axios.post(`http://localhost:5000/api/teams`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      onClose();
    } catch (err) {
      console.log("naki error", err);
    }
  };
  const submitHandler = () => {
    if (data.teamName === "" || data.grb === "") return;
    submitData();
  };

  const getNewsData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/teams/${newsId}`);
      const data = await response.json();
      setData({ ...data });
    } catch (error) {
      console.log(error);
    }
  };

  const editData = async () => {
    let token = localStorage.getItem("userToken");
    try {
      await axios.put(`http://localhost:5000/api/teams/${newsId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (edit) {
      getNewsData();
    }
  }, [edit, newsId]);

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
              <span>Create new team</span>
            </div>
          </div>
        </div>
        <Modal.Body>
          <Row className={styles.bodyRow}>
            <Col lg={8}>
              <h1 className={styles.bodyTitle}>Player Info</h1>
            </Col>
            <Col lg={4}>
              <h1 className={styles.bodyTitle}>Player Avatar (image)</h1>
            </Col>
          </Row>
          <Row className={styles.bodyRow2}>
            <Col lg={7} className={styles.leftPanel}>
              <Form className={styles.form}>
                <Form.Group
                  className={`mb-3`}
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className={styles.formLabel}>
                    Team Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Team Name"
                    value={data?.teamName}
                    onChange={(e) =>
                      setData({ ...data, teamName: e.target.value })
                    }
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col lg={5}>
              <div
                className={styles.dropContainer}
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
                // onClick={fileInputClicked}
              >
                <input
                  type="file"
                  name="image"
                  onChange={(e) => setData({ ...data, grb: e.target.files[0] })}
                />
                {data?.grb.length === 0 ? (
                  <>
                    <img src={upload} alt="upload" className={styles.upload} />
                    <p className={styles.uploadText}>Drag and drop photos</p>
                    <p className={styles.uploadInfo}>
                      JPG and PNG images - max 2MB
                    </p>
                  </>
                ) : (
                  <div className={styles.imagePreview}>
                    <img src={`http://localhost:5000/${data?.grb}`} />
                  </div>
                )}
              </div>
              {/* <DragAndDrop /> */}
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

export default CmsNewTeamModal;
