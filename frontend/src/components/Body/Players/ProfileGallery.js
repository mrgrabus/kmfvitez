import { Col, Container, Row } from "react-bootstrap";
import styles from "./ProfileGallery.module.css";

const ProfileGallery = () => {
  return (
      <Row>
        <Col md={4} className="p-2">
          <div className={styles.card}></div>
        </Col>
        <Col md={4} className="p-2">
          <div className={styles.card}></div>
        </Col>
        <Col md={4} className="p-2">
          <div className={styles.card}></div>
        </Col>
      </Row>
  );
};

export default ProfileGallery;
