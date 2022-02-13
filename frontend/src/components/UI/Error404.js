import styles from "./Error404.module.css";
import astronaut from "../../assets/error404.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className={styles.bg}>
      <img src={astronaut} className={`position-absolute top-50 start-50 translate-middle ${styles.hero}`}></img>
      <Link to="/home">
        <Button className={styles.btn}>Go back to safety</Button>
      </Link>
    </div>
  );
};

export default Error404;
