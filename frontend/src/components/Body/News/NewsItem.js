import styles from "./NewsItem.module.css";
import moment from "moment/min/moment-with-locales";
import clock from "../../../assets/Img/clock2.svg";
import rm from "../../../assets/Img/readmore.svg";
moment.locale("bs");

const NewsItem = ({ title, image, date }) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.layer}></div>
      <div className={styles.slika}>
        <img src={`http://167.235.50.89:5000/${image}`} alt="news"></img>
      </div>
      <div className={styles.newsContent}>
        <h3>{title}</h3>
        <div className={styles.buttons}>
          <img src={rm} alt="clock" />
          <p>Read more...</p>
          <img src={clock} alt="clock" />
          <p>{moment(date).startOf("hour").fromNow()} </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
