import { Col, Container, Row } from "react-bootstrap";
import styles from "./ProfileGallery.module.css";

const ProfileGallery = () => {
  return (
      <Row>
        <Col lg={4}>
          <div className={styles.card}></div>
        </Col>
        <Col lg={4}>
          <div className={styles.card}></div>
        </Col>
        <Col lg={4}>
          <div className={styles.card}></div>
        </Col>
      </Row>
  );
};

export default ProfileGallery;
