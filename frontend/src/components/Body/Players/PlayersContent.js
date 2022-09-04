import { Container, Row, Col } from "react-bootstrap";
import styles from "./PlayersContent.module.css";
import PlayersContentItem from "./PlayersContentItem";
import CountdownTimer from "../Countdown/CountdownTimer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import _ from "lodash";

const PlayersContent = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const apiCall = async () => {
    const varijabla = [];
    fetch("http://165.22.86.104:5000/api/players")
      .then((response) => {
        return response.json();
      })
      .then((parseData) => {
        const podaci = _.groupBy(parseData, "position.name");
        for (const key in podaci) {
          varijabla.push(podaci[key])
        }
        setData(varijabla);
        setLoader(false);
      });
  };
  useEffect(() => {
    apiCall();
  }, []);
  return loader ? (
    <h1>loading</h1>
  ) : (
    <Container className={styles.wrapper}>
      {data?.length > 0 &&
        data?.map((element) => (
          <>
          <p className={styles.categoryName}>{element[0].position.name}</p>
          <Row className={styles.row}>
          { element?.map((item) => (
                <Col lg={4} xs={12} sm={6} md={4}>
                  <Link to={item?.id.toString()}>
                    <PlayersContentItem
                      firstName={item?.firstName}
                      lastName={item?.lastName}
                      position={element[0].position.name}
                      number={item?.id}
                    />
                  </Link>
                </Col>  
          )) }
          </Row>
          </>
        ))}
      <CountdownTimer />
    </Container>
  );
};

export default PlayersContent;
