import { Container } from "react-bootstrap";
import styles from "./CmsHeader.module.css";
import grb from "../../assets/Img/kmf_grb.png";
import { Navigate, useNavigate } from "react-router-dom";

const CMSHeader = () => {
  let navigate = useNavigate();
  const clickHandler = () => {
    try {
      localStorage.removeItem("userToken");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container fluid className={styles.header}>
      <div className={styles.wrapper}>
        <img src={grb} alt="grb" className={styles.grb} />
        <div className={styles.title}>
          <p>
            KMFVitez{" "}
            <span className={styles.name}>Content Management System</span>
          </p>
        </div>
      </div>
      <button className={styles.btn} onClick={clickHandler}>
        Logout
      </button>
    </Container>
  );
};

export default CMSHeader;
