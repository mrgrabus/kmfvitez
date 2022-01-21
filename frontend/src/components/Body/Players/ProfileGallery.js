import { Col, Container, Row } from "react-bootstrap";
import styles from "./ProfileGallery.module.css";

const ProfileGallery = () => {
  return (
    <Container fluid className="ps-0 pe-0">
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
    </Container>
  );
};

export default ProfileGallery;
