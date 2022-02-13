import bg from "../../assets/Img/bgImg.png";
import styles from "./BgImg.module.css";

const BgImg = (props) => {
  return (
    <div className="position-relative">
      {props.type === "article" ? (
        <img
          src={bg}
          alt="pozadina"
          className={`${styles.pozadina} ${styles.articleBg}`}
        ></img>
      ) : (
        <img src={bg} alt="pozadina" className={styles.pozadina}></img>
      )}
    </div>
  );
};

export default BgImg;
