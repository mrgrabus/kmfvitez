import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./NewsPageContent.module.css";
import moment from "moment/min/moment-with-locales";
moment.locale("bs");

const NewsPageContent = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const data = await fetch("http://167.235.50.89:5000/api/news");
      const response = await data.json();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container className={styles.wrapper}>
      <Row>
        {data?.length > 0 &&
          data?.map((item) => (
            <Col sm={4} className={styles.col}>
              <div className={styles.box}>
                <img
                  src={`http://167.235.50.89:5000/${item?.image}`}
                  alt="bgimage"
                />
                <div className={styles.info}>
                  <p className={styles.title}>{item?.title}</p>
                  <p className={styles.price}>{moment(item?.createdAt).startOf("hour").fromNow()}</p>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default NewsPageContent;
