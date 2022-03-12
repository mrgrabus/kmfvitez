import styles from "./DashboardCard.module.css";
import blogpost from "../../assets/Img/blogpost.svg";
import match from "../../assets/Img/dashboardplayer.png";
import player from "../../assets/Img/dashboardavatar.png";
import teams from "../../assets/Img/teams.png";

const DashboardCard = (props) => {

  return (
    <div className={`${styles.card} ${props.type === 'players' && styles.pcard}`}>
      <img src={props.type === "article" ? blogpost : props.type === 'matches' ? match : props.type === 'players' ? player : teams} alt="blogpost" />
      <div className={`p-3 ${styles.content}`}>
        <p>{props.text}</p>
        <p>{props.count}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
