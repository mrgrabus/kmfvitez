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
        `http://167.235.50.89:5000/api/news/${articleId}`
      );
      const data = await response.json();
      setData(data);
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
    <div>
      <div className={styles.overlay}></div>
      <img src={`http://167.235.50.89:5000/${data?.image}`} className={styles.bg} />
      <NavigationBar />
      <Container fluid className={styles.div2}>
        <div
          className={`${styles.div} container position-absolute p-5 top-50 start-0`}
        >
          <h1>{data?.title}</h1>
        </div>
      </Container>

      <div className={styles.leftDiv}>
        <div className={styles.lWrapper}>
          <div className="d-flex justify-content-between">
            <p className={styles.timestamp}>{date}</p>
            <a href="#" className={styles.shareBtn}>
              <FontAwesomeIcon icon={faShareAlt} />
              SHARE
            </a>
          </div>
          <h1 className={styles.bgTextOverlay}>{data?.title}</h1>
          <div className={styles.articleWrapper}>
            <p className={styles.articleText}>{data?.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
