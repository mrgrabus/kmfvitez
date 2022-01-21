import { Container, Row, Col } from "react-bootstrap";
import styles from "./PlayersContent.module.css";
import PlayersContentItem from "./PlayersContentItem";

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
    </Container>
  );
};

export default PlayersContent;
