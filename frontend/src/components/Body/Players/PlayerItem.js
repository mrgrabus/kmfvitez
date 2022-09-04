import { Container } from "react-bootstrap";
import NavigationBar from "../../Header/NavigationBar";
import hero from "../../../assets/Img/Players/hero.png";
import styles from "./PlayerItem.module.css";
import ProfileGallery from "./ProfileGallery";
import Footer from "../../Footer/Footer";
import ig from '../../../assets/Img/ig.svg';
import tw from '../../../assets/Img/tw.svg';
import fb from '../../../assets/Img/fb.svg';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlayerItem = (props) => {
  const { playerId } = useParams();
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);
  const apiCall = async () => {
    try {
      const response = await fetch(
        `http://165.22.86.104:5000/api/player/${playerId}`
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
      <div className={`position-relative ${styles.wrapper}`}>
        <Container className={`${styles.mobile} ${styles.desktop}`}>
          <div className={styles.div}>
            <img src={hero} alt="hero"></img>
            <p className={styles.number}>{data?.id}</p>
          </div>
          <div className={styles.profile}>
            <p>{data?.position.name}</p>
            <h1>
              {data?.firstName} {data?.lastName}
            </h1>
            <p>{data?.placeOfBirth}</p>
            <p>
              {data?.description}
            </p>
            <div className={styles.icons}>
            <img src={fb} className={styles.icon} onClick={() => {
                  window.open(data?.instagramLinkg, "_blank");
                }}/>
              <img src={tw} className={styles.icon} onClick={() => {
                  window.open(data?.instagramLinkg, "_blank");
                }}/>
              <img src={ig} className={styles.icon} onClick={() => {
                  window.open(data?.instagramLinkg, "_blank");
                }}/>
            </div>
          </div>
        </Container>
      </div>
      {/* <ProfileGallery/> */}
      <Footer />
    </>
  );
};

export default PlayerItem;
