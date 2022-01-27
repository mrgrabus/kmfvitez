import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./MainButton.module.css";

const MainButton = props => {
  return (
    <button className={styles.btn}>
      {props.txt}
      <FontAwesomeIcon
        icon={faArrowRight}
        className={styles.arrowIcon}
      ></FontAwesomeIcon>
    </button>
  );
};
export default MainButton;
