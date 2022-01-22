import styles from "./PlayersContentItem.module.css";
import placeholder from "../../../assets/Img/Players/playerholder.jpg";
import hero from "../../../assets/Img/Players/hero.png";

const PlayersContentItem = () => {
  return (
    <div className={styles.imageHolder}>
      <div className={styles.layer}></div>
      <img src={hero} className={styles.hero} alt="hero"></img>
      <img src={placeholder} alt="placeholder" />
      <div className={styles.itemName}>
        <p className={styles.text}>
          1 <span>John</span> Smith <br /> Goalkeeper
        </p>
      </div>
    </div>
  );
};

export default PlayersContentItem;