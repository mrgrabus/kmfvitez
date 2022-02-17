import { Container } from "react-bootstrap";
import NavigationBar from "../../Header/NavigationBar";
import hero from "../../../assets/Img/Players/hero.png";
import styles from "./PlayerItem.module.css";
import ProfileGallery from "./ProfileGallery";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlayerItem = (props) => {
  const { playerId } = useParams();
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);
  const apiCall = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/player/${playerId}`
      );
      const data = await response.json();
      setData(data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiCall();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavigationBar />
      <div className="position-relative vh-100">
        <Container className="top-50 start-50 translate-middle position-absolute d-flex justify-content-center ps-0 pe-0">
          <div className={styles.div}>
            <img src={hero} alt="hero"></img>
            <p className={styles.number}>{data?.id}</p>
          </div>
          <div className={styles.profile}>
            <p>Striker</p>
            <h1>
              {data?.firstName} {data?.lastName}
            </h1>
            <p>Vitez, Bosna i Hercegovina</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              convallis, ligula eget posuere accumsan, justo felis varius dui,
              sed blandit.
            </p>
            <div className={styles.icons}>
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.icon}
                onClick={() => {
                  window.open(data?.facebookLink, "_blank");
                }}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faTwitter}
                className={styles.icon}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.icon}
                onClick={() => {
                  window.open(data?.instagramLinkg, "_blank");
                }}
              ></FontAwesomeIcon>
            </div>
          </div>
        </Container>
      </div>
      <ProfileGallery />
      <Footer />
    </>
  );
};

export default PlayerItem;
