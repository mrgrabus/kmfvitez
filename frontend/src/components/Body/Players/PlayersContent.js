import { Container, Row, Col } from "react-bootstrap";
import styles from "./PlayersContent.module.css";
import PlayersContentItem from "./PlayersContentItem";
import CountdownTimer from "../Countdown/CountdownTimer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import _ from "lodash";

const PlayersContent = () => {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(true);
  const apiCall = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/players");
      const responseData = await response.json();
      const podaci = _.groupBy(responseData, "position.name");
      setData(podaci);
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
      {data?.length > 0 && data?.map((element) => (
          <>
          {console.log(element?.id)}
            <p className={styles.categoryName}>{element}</p>
            {data[element]?.map((item) => (
              <Row className={styles.row}>
                <Col lg={4}>
                  <Link to={item?.id.toString()}>
                    <PlayersContentItem
                      firstName={item?.firstName}
                      lastName={item?.lastName}
                    />
                  </Link>
                </Col>
              </Row>
            ))}
          </>
        ))}
      <CountdownTimer />
    </Container>
  );
};

export default PlayersContent;
