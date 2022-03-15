import { Col, Container, Row } from "react-bootstrap";
import styles from "./Sponsors.module.css";
import sp1 from "../../../assets/Img/Sponsors/sp1.svg";
import sp2 from "../../../assets/Img/Sponsors/sp2.svg";
import sp3 from "../../../assets/Img/Sponsors/sp3.svg";
import sp4 from "../../../assets/Img/Sponsors/sp4.svg";

const Sponsors = () => {
  return (
    <Container className={styles.sponsors}>
      <Row className={styles.row}>
        <Col xs={6} md={3} className={styles.sponsorItem}>
          <a href="#">
            <div className={styles.imgDiv}>
              <img src={sp1} alt="nb"></img>
            </div>
          </a>
        </Col>
        <Col xs={6} md={3} className={styles.sponsorItem}>
          <a href="#">
            <div className={styles.imgDiv}>
              <img src={sp2} alt="nb"></img>
            </div>
          </a>
        </Col>
        <Col xs={6} md={3} className={styles.sponsorItem}>
          <a href="#">
            <div className={styles.imgDiv}>
              <img src={sp3} alt="nb"></img>
            </div>
          </a>
        </Col>
        <Col xs={6} md={3} className={styles.sponsorItem}>
          <a href="#">
            <div className={styles.imgDiv}>
              <img src={sp4} alt="nb"></img>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Sponsors;
