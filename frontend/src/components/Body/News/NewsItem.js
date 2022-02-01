import styles from "./NewsItem.module.css";
import img1 from "../../../assets/Img/News/img1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClock } from "@fortawesome/free-solid-svg-icons";

const NewsItem = ({title, image}) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.layer}></div>
      <div className={styles.slika}>
        <img src={img1} alt="news"></img>
      </div>
      <div className={styles.newsContent}>
        <h3>{title}</h3>
        <div className={styles.buttons}>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.bars}
          ></FontAwesomeIcon>
          <p>Read more...</p>
          <FontAwesomeIcon
            icon={faClock}
            className={styles.clock}
          ></FontAwesomeIcon>
          <p>2 hrs ago</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
