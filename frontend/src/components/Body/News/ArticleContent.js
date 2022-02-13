import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavigationBar from "../../Header/NavigationBar";
import styles from "./ArticleContent.module.css";

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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiCall();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.bg}>
      <NavigationBar />
      <Container fluid className={styles.div2}>
        <div
          className={`${styles.div} container position-absolute top-50 start-50 translate-middle`}
        >
          <h1>{data?.title}</h1>
        </div>
      </Container>

      <div className={styles.leftDiv}>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
