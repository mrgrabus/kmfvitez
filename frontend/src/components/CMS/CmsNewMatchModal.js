import styles from "./CmsNewMatchModal.module.css";
import axios from "axios";
import { Col, Form, Modal, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import pen from "../../assets/Img/match.svg";
import moment from "moment";
const CmsNewMatchModal = ({ open, onClose, edit, matchId, isSuccessful }) => {
  const [selectedRadio, setSelectedRadio] = useState("1");
  const isRadioSelected = (value) => {
    if (selectedRadio === value) return true;
  };
  const handleRadioClick = (e) => {
    setSelectedRadio(e.target.value);
  };
  const [data, setData] = useState({
    date: "2020-02-02 00:00:00",
    location: "",
    status: "1",
    isHome: "false",
    teamId: "1",
  });
  const [teamData, setTeamData] = useState();

  const submitData = async () => {
    let token = localStorage.getItem("userToken");
    try {
      await axios.post(
        `http://165.22.86.104:5000/api/matches`,
        {
          date: data.date,
          location: data.location,
          status: selectedRadio,
          isHome: data.isHome,
          teamId: data.teamId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onClose();
      isSuccessful();
    } catch (err) {
      console.log(err);
    }
  };
  const submitHandler = () => {
    if (data?.date === "" || data?.location === "") return;
    submitData();
  };

  const getNewsData = async () => {
    try {
      const response = await fetch(
        `http://165.22.86.104:5000/api/matches/${matchId}`
      );
      const data = await response.json();
      setData({ ...data });
    } catch (error) {
      console.log(error);
    }
  };
  const getTeams = async () => {
    try {
      const response = await fetch("http://165.22.86.104:5000/api/matches/teams");
      const teams = await response.json();
      setTeamData(teams);
    } catch (error) {
      console.log(error);
    }
  };

  const editData = async () => {
    let token = localStorage.getItem("userToken");
    try {
      await axios.put(
        `http://165.22.86.104:5000/api/matches/${matchId}`,
        {
          date: data.date,
          location: data.location,
          status: selectedRadio,
          isHome: data.isHome,
          teamId: data.teamId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      isSuccessful();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTeams();
    if (edit) {
      getNewsData();
    }
  }, [edit, matchId]);

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
        // onHide={onClose}
      >
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.title}>
              <img src={pen} alt="pen" />
              <span>Create new match</span>
            </div>
            <form className={styles.switchField}>
              <input
                type="radio"
                id="switch_left"
                name="switchToggle"
                value="1"
                onChange={handleRadioClick}
                checked={isRadioSelected("1")}
              />
              <label htmlFor="switch_left">Active</label>
              <input
                type="radio"
                id="switch_right"
                name="switchToggle"
                value="2"
                onChange={handleRadioClick}
                checked={isRadioSelected("2")}
              />
              <label htmlFor="switch_right">Inactive</label>
              <input
                type="radio"
                id="switch_schedule"
                name="switchToggle"
                value="3"
                onChange={handleRadioClick}
                checked={isRadioSelected("3")}
              />
              <label htmlFor="switch_schedule">Superactive</label>
            </form>
          </div>
        </div>
        <Modal.Body>
          <Row className={styles.bodyRow}>
            <Col lg={8}>
              <h1 className={styles.bodyTitle}>Match Content</h1>
            </Col>
            <Col lg={4}>
              <h1 className={styles.bodyTitle}>Match Info</h1>
            </Col>
          </Row>
          <Row className={styles.bodyRow2}>
            <Col lg={7} className={styles.leftPanel}>
              <Form className={styles.form}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className={styles.formLabel}>Team</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={data?.teamId}
                    onChange={(e) => {
                      setData({ ...data, teamId: e.target.value });
                    }}
                  >
                    {teamData.map((item) => (
                      <option value={item?.id}>{item?.teamName}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className={styles.formLabel}>
                    Team Type
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={data.isHome}
                    onChange={(e) =>
                      setData({ ...data, isHome: e.target.value })
                    }
                  >
                    <option value="false">Home Team</option>
                    <option value="true">Away Team</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
            <Col lg={5} className={styles.datePicker}>
              <p>Date and Time</p>
              <input
                type="datetime-local"
                value={moment(data?.date).format("YYYY-MM-DDThh:mm")}
                onChange={(e) => setData({ ...data, date: e.target.value })}
              />
              <p>Location</p>
              <input
                type="text"
                value={data.location}
                placeholder="Location"
                onChange={(e) => setData({ ...data, location: e.target.value })}
              />
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

export default CmsNewMatchModal;
