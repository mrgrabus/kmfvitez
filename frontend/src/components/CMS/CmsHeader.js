import { Container } from "react-bootstrap";
import styles from "./CmsHeader.module.css";
import grb from "../../assets/Img/kmf_grb.png";

const CMSHeader = () => {
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
      <button className={styles.btn}>Logout</button>
    </Container>
  );
};

export default CMSHeader;
