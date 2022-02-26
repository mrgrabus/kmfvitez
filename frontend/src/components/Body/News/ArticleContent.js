import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavigationBar from "../../Header/NavigationBar";
import styles from "./ArticleContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const ArticleContent = () => {
  const { articleId } = useParams();
  const [data, setData] = useState();
  const apiCall = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/news/${articleId}`
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  let date;
  if (data !== undefined) {
    date = new Intl.DateTimeFormat("en-GB", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    }).format(new Date(data?.createdAt));
  }
  useEffect(() => {
    apiCall();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.bg}>
      <NavigationBar />
      <Container fluid className={styles.div2}>
        <div
          className={`${styles.div} container position-absolute p-5 top-50 start-0`}
        >
          <h1>{data?.title}</h1>
        </div>
      </Container>

      <div className={styles.leftDiv}>
        <div className="p-5">
          <div className="d-flex justify-content-between">
            <p className={styles.timestamp}>{date}</p>
            <a href="#" className={styles.shareBtn}>
              <FontAwesomeIcon icon={faShareAlt} />
              SHARE
            </a>
          </div>
          <h1 className={styles.bgTextOverlay}>{data?.title}</h1>
          <div className="p-5">
            <p className={styles.articleText}>{data?.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
