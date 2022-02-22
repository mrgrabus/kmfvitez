import styles from "./DashboardCard.module.css";
import blogpost from "../../assets/Img/blogpost.svg";

const DashboardCard = (props) => {
  return (
    <div className={styles.card}>
      <img src={blogpost} alt="blogpost" />
      <div className={`p-3 ${styles.content}`}>
        <p>{props.text}</p>
        <p>{props.count}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
