import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";
// import footerGrb from "../../assets/Img/footer_grb.png";
import footerGrb from "../../assets/Img/kmfgrb.png";
import arrow from "../../assets/Img/arrowup.svg";

const Footer = () => {
  const clickHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Container fluid className={`ps-0 pe-0 ${styles.bg}`}>
        <div className={styles.arrow} onClick={clickHandler}>
          <img src={arrow} />
        </div>
        <Container className={styles.wrapper}>
          <div className={styles.crLogo}>
            <img src={footerGrb} alt="kmf vitez"></img>
            <p>KMF VITEZ</p>
          </div>
          <div className={styles.crInfo}>
            <p>
              Copyright KMF Vitez <span> | Official website of KMF Vitez</span>
            </p>
            <p>Created by Edin Grabus</p>
          </div>
        </Container>
        <div className={`${styles.crColor}`}></div>
      </Container>
    </>
  );
};

export default Footer;
