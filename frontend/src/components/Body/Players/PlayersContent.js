import { Container, Row, Col } from "react-bootstrap";
import styles from "./PlayersContent.module.css";
import PlayersContentItem from "./PlayersContentItem";
import CountdownTimer from "../Countdown/CountdownTimer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PlayersContent = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const apiCall = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/players");
      const data = await response.json();
      setData(data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
  return loader ? (
    <h1>loading</h1>
  ) : (
    <Container className={styles.wrapper}>
      <p className={styles.categoryName}>GOALKEEPERS</p>
      <Row className={styles.row}>
        {data.length > 0 &&
          data.map((element) => (
            <Col lg={4}>
              <Link to={element.id.toString()}>
                <PlayersContentItem
                  firstName={element.firstName}
                  lastName={element.lastName}
                />
              </Link>
            </Col>
          ))}
      </Row>
      <CountdownTimer />
    </Container>
  );
};

export default PlayersContent;
