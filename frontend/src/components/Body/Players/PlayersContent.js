import { Container, Row, Col } from "react-bootstrap";
import styles from "./PlayersContent.module.css";
import PlayersContentItem from "./PlayersContentItem";
import CountdownTimer from "../Countdown/CountdownTimer";

const PlayersContent = () => {
  return (
    <Container className={styles.wrapper}>
      <p className={styles.categoryName}>GOALKEEPERS</p>
      <Row className={styles.row}>
        <Col lg={4}>
          <PlayersContentItem />
        </Col>
        <Col lg={4}>
          <PlayersContentItem />
        </Col>
        <Col lg={4}>
          <PlayersContentItem />
        </Col>
      </Row>
      <p className={styles.categoryName}>DEFENDERS</p>
      <Row className={styles.row}>
        <Col lg={4}>
          <PlayersContentItem />
        </Col>
        <Col lg={4}>
          <PlayersContentItem />
        </Col>
        <Col lg={4}>
          <PlayersContentItem />
        </Col>
      </Row>
      <CountdownTimer />
    </Container>
  );
};

export default PlayersContent;
