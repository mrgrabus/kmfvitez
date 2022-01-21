import { Container } from "react-bootstrap";
import NavigationBar from "../../Header/NavigationBar";
import hero from "../../../assets/Img/Players/hero.png";
import styles from "./PlayerItem.module.css";
import ProfileGallery from "./ProfileGallery";
import Footer from '../../Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"

const PlayerItem = () => {
  return (
    <>
      <NavigationBar />
      <div className="position-relative vh-100">
        <Container className="top-50 start-50 translate-middle position-absolute d-flex justify-content-center">
          <div>
            <img src={hero} alt="hero"></img>
            <p className={styles.number}>1</p>
          </div>
          <div className={styles.profile}>
            <p>Striker</p>
            <h1>John Doe</h1>
            <p>Vitez, Bosna i Hercegovina</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              convallis, ligula eget posuere accumsan, justo felis varius dui,
              sed blandit.
            </p>
            <div>
              <FontAwesomeIcon icon={faFacebook} className={styles.icon}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTwitter} className={styles.icon}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faInstagram} className={styles.icon}></FontAwesomeIcon>
            </div>
          </div>
        </Container>
      </div>

      <ProfileGallery className="position-relative" />
      <Footer />
    </>
  );
};

export default PlayerItem;
