import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import fks from "../../assets/Grbovi/FK_Sarajevo 1.png";
import kmf from "../../assets/Grbovi/KMF Grb.png";
import { useState } from "react";
import Modal from "./Modal";
import { Button } from "react-bootstrap";
const Card = (props) => {
  const [modalOn, setModalOn] = useState(false);
  const btnClickHandler = () => {
    setModalOn(true);
  };
  return (
    <>
      <div className={styles.gameCard}>
        <div className={styles.headerClass}>
          <div className={styles.time}>
            <p className={styles.dateNumber}>20.</p>
            <div className={styles.dayWrapper}>
              <p className={styles.day}>
                NEDJELJA
                <br /> <span className={styles.month}>NOVEMBAR</span>
              </p>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} className={styles.clock} />
          </div>
        </div>
        <div className={styles.teamsLogos}>
          <div className="logo">
            <img src={kmf} alt="kmf vitez" />
          </div>
          <div className={styles.tekmaDetails}>
            <p>PRVA LIGA</p>
            <p className="time">21:00</p>
            <p>
              GRADSKA SPORTSKA <br />
              DVORANA VITEZ
            </p>
          </div>
          <div className="logo">
            <img src={fks} alt="fk sarajevo" />
          </div>
        </div>
        <div className={styles.teamNames}>
          <p>KMF Vitez</p>
          <p>VS</p>
          <p>FK Sarajevo</p>
        </div>
        {/* <div className={styles.terenContainer}>
        <img src={teren} />
      </div> */}
        <div className={styles.buttonContainer}>
          <button>DISCOVER MORE</button>
        </div>
      </div>
    </>
  );
};

export default Card;
