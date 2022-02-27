import styles from "./DashboardCard.module.css";
import blogpost from "../../assets/Img/blogpost.svg";
import player from '../../assets/Img/dashboardplayer.png'

const DashboardCard = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.type === 'article' ? blogpost : player} alt="blogpost" />
      <div className={`p-3 ${styles.content}`}>
        <p>{props.text}</p>
        <p>{props.count}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
