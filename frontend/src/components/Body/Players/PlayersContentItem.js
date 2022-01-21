import styles from "./PlayersContentItem.module.css";
import placeholder from "../../../assets/Img/Players/playerholder.jpg";

const PlayersContentItem = () => {
  return (
    <div className={styles.layer}>
      <div className={styles.imageHolder}>
        <img src={placeholder} alt="placeholder" />
        <div className={styles.itemName}>
          <p>1</p>
          <p>John</p>
          <p>Smith</p>
          <p>Goalkeeper</p>
        </div>
      </div>
    </div>
  );
};

export default PlayersContentItem;
