import styles from "./Card.module.css";
import fks from "../../assets/Grbovi/FK_Sarajevo 1.png";
import kmf from "../../assets/Grbovi/KMF Grb.png";
import clock from '../../assets/Img/clock.svg'
import { useState } from "react";
import ModalReminder from "./ModalReminder";

const Card = (props) => {
  const [show, setShow] = useState(false);
  const reminderModalHandler = () => {
    setShow(true);
  };
  return (
    <>
      <ModalReminder show={show} />
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
          <div onClick={reminderModalHandler}>
            <img src={clock} alt="clock" className={styles.clock} />
          </div>
        </div>
        <div className={styles.teamsLogos}>
          <div>
            <img src={kmf} alt="kmf vitez" />
          </div>
          <div className={styles.tekmaDetails}>
            <p>PRVA LIGA</p>
            <p className={styles.vrijeme}>21:00</p>
            <p>
              GRADSKA SPORTSKA <br />
              DVORANA VITEZ
            </p>
          </div>
          <div>
            <img src={fks} alt="fk sarajevo" />
          </div>
        </div>
        <div className={styles.teamNames}>
          <p>KMF Vitez</p>
          <p>VS</p>
          <p>FK Sarajevo</p>
        </div>
        <div className={styles.buttonContainer}>
          <button>DISCOVER MORE</button>
        </div>
      </div>
    </>
  );
};

export default Card;
