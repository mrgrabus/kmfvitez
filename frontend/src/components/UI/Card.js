import styles from "./Card.module.css";
import kmf from "../../assets/Grbovi/KMF Grb.png";
import clock from "../../assets/Img/clock.svg";
import { useState } from "react";
import ModalReminder from "./ModalReminder";
import moment from "moment/min/moment-with-locales";
moment.locale("bs");

const Card = ({ location, isHome, teamName, date, grb }) => {
  const [show, setShow] = useState(false);
  const reminderModalHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <ModalReminder
        open={show}
        onClose={() => {
          setShow(false);
        }}
        date={moment(date).format("MMMM Do YYYY")}
      />
      <div className={styles.gameCard}>
        <div className={styles.headerClass}>
          <div className={styles.time}>
            <p className={styles.dateNumber}>{moment(date).format("D")}.</p>
            <div className={styles.dayWrapper}>
              <p className={styles.day}>
                {moment(date).format("dddd").toUpperCase()}
                <br />{" "}
                <span className={styles.month}>
                  {moment(date).format("MMMM").toUpperCase()}
                </span>
              </p>
            </div>
          </div>
          <div onClick={reminderModalHandler}>
            <img src={clock} alt="clock" className={styles.clock} />
          </div>
        </div>
        <div className={styles.teamsLogos}>
          <div>
            {isHome ? (
              <img src={kmf} alt="kmf vitez" />
            ) : (
              <img
                className={styles.grb}
                src={`http://165.22.86.104:5000/${grb}`}
                alt="kmf vitez"
              />
            )}
          </div>
          <div className={styles.tekmaDetails}>
            <p>PRVA LIGA</p>
            <p className={styles.vrijeme}>{moment(date).format("LT")}</p>
            <p>{location.toUpperCase()}</p>
          </div>
          <div>
            {isHome ? (
              <img
                className={styles.grb}
                src={`http://165.22.86.104:5000/${grb}`}
                alt="kmf vitez"
              />
            ) : (
              <img src={kmf} alt="kmf vitez" />
            )}
          </div>
        </div>
        <div className={styles.teamNames}>
          {isHome ? <p>KMF Vitez</p> : <p>{teamName}</p>}
          <p>VS</p>
          {isHome ? <p>{teamName}</p> : <p>KMF Vitez</p>}
        </div>
        <div className={styles.buttonContainer}>
          <button>DISCOVER MORE</button>
        </div>
      </div>
    </>
  );
};

export default Card;
