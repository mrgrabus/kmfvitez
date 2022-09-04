import styles from "./CmsNewArticleModal.module.css";
import axios from "axios";
import { Col, Form, Modal, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import pen from "../../assets/Img/pen-tool.svg";
import upload from "../../assets/Img/upload.svg";
import DragAndDrop from "../UI/DragAndDrop";

const CmsNewPlayerModal = ({ open, onClose, edit, newsId }) => {
  const [positionData, setPositionData] = useState([]);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    facebookLink: "",
    instagramLinkg: "",
    description: "",
    placeOfBirth: "",
    positionId: 1,
    image: "",
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
    formData.append("image", data.image);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("facebookLink", data.facebookLink);
    formData.append("instagramLinkg", data.instagramLinkg);
    formData.append("description", data.description);
    formData.append("placeOfBirth", data.placeOfBirth);
    formData.append("positionId", data.positionId);
    try {
      await axios.post(`http://165.22.86.104:5000/api/player`, formData, {
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
    if (data.firstName === "" || data.lastName === "" || data.description === "") return;
    submitData();
  };

  const getNewsData = async () => {
    try {
      const response = await fetch(
        `http://165.22.86.104:5000/api/player/${newsId}`
      );
      const data = await response.json();
      setData({ ...data });
    } catch (error) {
      console.log(error);
    }
  };
  const getPosition = async () => {
    try {
      const response = await fetch("http://165.22.86.104:5000/api/player/position");
      const position = await response.json();
      setPositionData(position);
    } catch (error) {
      console.log(error);
    }
  };

  const editData = async () => {
    let token = localStorage.getItem("userToken");
    try {
      await axios.put(`http://165.22.86.104:5000/api/player/${newsId}`, data, {
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
    getPosition();
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
              <span>Create new player</span>
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
                <div className="d-flex justify-content-between">
                  <Form.Group
                    className={`mb-3 ${styles.playerControl}`}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.formLabel}>
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      value={data.firstName}
                      onChange={(e) =>
                        setData({ ...data, firstName: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className={`mb-3 ${styles.playerControl}`}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.formLabel}>
                      Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      value={data.lastName}
                      onChange={(e) =>
                        setData({ ...data, lastName: e.target.value })
                      }
                    />
                  </Form.Group>
                </div>
                <div className="d-flex justify-content-between">
                  <Form.Group
                    className={`mb-3 ${styles.playerControl}`}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.formLabel}>
                      Position
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={data?.positionId}
                      onChange={(e) => {
                        setData({ ...data, positionId: e.target.value });
                      }}
                    >
                      {positionData.map((item) => (
                        <option value={item?.id}>
                          {item?.name.toUpperCase()}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className={`mb-3 ${styles.playerControl}`}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.formLabel}>
                      Place of Birth
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Place of Birth"
                      value={data.placeOfBirth}
                      onChange={(e) =>
                        setData({ ...data, placeOfBirth: e.target.value })
                      }
                    />
                  </Form.Group>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className={styles.formLabel}>
                    Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Description"
                    value={data.description}
                    onChange={(e) => setData({ ...data, description: e.target.value })}
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
                  onChange={(e) =>
                    setData({ ...data, image: e.target.files[0] })
                  }
                />
                {data?.image.length === 0 ? (
                  <>
                    <img src={upload} alt="upload" className={styles.upload} />
                    <p className={styles.uploadText}>Drag and drop photos</p>
                    <p className={styles.uploadInfo}>
                      JPG and PNG images - max 2MB
                    </p>
                  </>
                ) : (
                  <div className={styles.imagePreview}>
                    <img src={`http://165.22.86.104:5000/${data?.image}`} />
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

export default CmsNewPlayerModal;
