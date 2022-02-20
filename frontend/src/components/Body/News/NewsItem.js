import styles from "./NewsItem.module.css";
import img1 from "../../../assets/Img/News/img1.png";
import moment from "moment";
import clock from "../../../assets/Img/clock2.svg";
import rm from "../../../assets/Img/readmore.svg";

const NewsItem = ({ title, image, date }) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.layer}></div>
      <div className={styles.slika}>
        <img src={img1} alt="news"></img>
      </div>
      <div className={styles.newsContent}>
        <h3>{title}</h3>
        <div className={styles.buttons}>
          <img src={rm} alt="clock" />
          <p>Read more...</p>
          <img src={clock} alt="clock" />
          <p>{moment(date).format("MMM Do YY")} </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
